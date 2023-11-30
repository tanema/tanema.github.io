// Will sync up all of the results from the race it will
// pull in the race results, and then calculate the final
// points from all the bets.
const syncRaceResults = () => {
  const races = importSeasonData()
  calculatePoints(races)
}

const importSeasonData = () => {
  Logger.log(`Importing season ${currentSeason} result data`)
  const races = fetchRaceResults(currentSeason)
  Logger.log(`Updating results sheet.`)
  for(const race of races) {
    if(race.results.length == 0) {
      break
    }
    resultsSheet.getRange(2, race.round, race.results.length).setValues(race.results.map((driver) => [driver]))
  }
  return races
}

const posPoint = (raceResults, racer) => 
  racer !== "" && raceResults.includes(racer) ? (driverCount - raceResults.indexOf(racer)) : 0

// calculatePoints will go over each players bets, add up their order points and f1 points and set the results
// in the last column in the bets sheet. As it goes, it will mark progress in the pointsSheet for visualizing
// passes.
const calculatePoints = (races) => {
  Logger.log(`Calculating Points for ${playerCount} players`)
  for(let i = 2; i <= (playerCount*2)+1; i+=2) {
    let orderPoints = 0;
    let f1Points = 0;
    const bets = betsSheet.getRange(i, 2, 2, races.length).getValues()
    for(let j = 0; j < races.length; j++) {
      const raceResults = resultsSheet.getRange(2, j+1, driverCount).getValues().map((v) => v[0])
      const bet1 = bets[0][j]
      const bet2 = bets[1][j]
      Logger.log(`Bet By Player ${i-1} in race ${j}: ${bet1} ${bet2}`);
      const raceBetResult = posPoint(raceResults, bet1) + posPoint(raceResults, bet2)
      orderPoints += raceBetResult
      f1Points += (races[j].points[bet1] ?? 0) + (races[j].points[bet2] ?? 0)
      Logger.log(`Setting Bet Points on row ${i} col ${j+2}: ${raceBetResult}`);
      pointsSheet.getRange((i/2)+1, j+2).setValue(orderPoints) 
    }
    Logger.log(`Setting Points on row ${i}: rop: ${orderPoints}, f1p: ${f1Points}`);
    betsSheet.getRange(i, races.length+2, 1, 2).setValues([[orderPoints, f1Points]]);
  }
}
