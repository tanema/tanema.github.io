const getSheet = (name) => SpreadsheetApp.getActiveSpreadsheet().getSheetByName(name)

const fetch = (path) => {
  Logger.log(`fetching https://ergast.com/api${path}`)
  const resp = UrlFetchApp.fetch(`https://ergast.com/api${path}`, {muteHttpExceptions: true})
  if(resp.getResponseCode() != 200) {
    Logger.log( `unable to fetch https://ergast.com/api${path}`)
    Logger.log(resp.getContentText())
    throw `unable to fetch https://ergast.com/api${path}`
  }
  return JSON.parse(resp.getContentText()).MRData
}

const fetchRaceResults = (season) => {
  Logger.log(`fetching race season ${season} results`)
  const allRaces = fetch(`/f1/${season}.json`).RaceTable.Races
  for(const race of allRaces) {
    race.results = []
    race.points = {};
  }
  Logger.log(`season ${season} has ${allRaces.length} races`)
  for(const race of allRaces) {
    const results = fetch(`/f1/${season}/${race.round}/results.json`).RaceTable.Races?.[0]?.Results ?? [];
    if(results.length == 0) {
      Logger.log(`Race round ${race.round} has no results so returning.`)
      break
    }
    race.results = results.map((result) => `${result.Driver.givenName} ${result.Driver.familyName}`)
    race.points = results.reduce((points, result) => {
      points[`${result.Driver.givenName} ${result.Driver.familyName}`] = parseInt(result.points, 10)
      return points
    }, {})
  }
  return allRaces
}
