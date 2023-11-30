// The year of the current season.
const currentSeason = 2023;
// The amount of people betting on drivers
const playerCount = 7;
// The current amount of seats in the season. 
// So if drivers change this value does not need to change
const driverCount = 20; 

const betsSheet = getSheet("Bets");
const resultsSheet = getSheet("Results");
const pointsSheet = getSheet("PointsOverRaces");
