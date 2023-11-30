// Setup sheet will pull in the races and set the headers on 
// the bets and races sheets.
const setupSheet = () => {
  const races = fetch(`/f1/${currentSeason}.json`).RaceTable.Races
  const headers = [races.map((race) => `${race.raceName} ${race.date}`)]
  betsSheet.getRange(1, 2, 1, races.length).setValues(headers)
  betsSheet.autoResizeColumns(1, races.length)
  resultsSheet.getRange(1, 1, 1, races.length).setValues(headers)
  resultsSheet.autoResizeColumns(1, races.length)
  pointsSheet.getRange(1, 2, 1, races.length).setValues(headers)
  pointsSheet.autoResizeColumns(1, races.length+1)

  const playerNames = betsSheet.getRange(2, 1, playerCount*2, 1).getValues().filter((row) => row[0] != "")
  console.log(playerNames)
  pointsSheet.getRange(2, 1, playerNames.length, 1).setValues(playerNames)
}
