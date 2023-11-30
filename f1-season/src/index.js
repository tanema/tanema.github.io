import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import ChartRace from 'react-chart-race';
import players from './data/players';
import raceData from './data/race_data';

const getRaceResults = (i) => 
  Object.keys(players).map((name) => ({value: raceData[i].results[name], ...players[name]}))

const App = () => {
  const [currentRace, setCurrentRace] = useState(0);
  const [raceResultData, setRaceData] = useState(getRaceResults(currentRace));

  useEffect(() => {
    setRaceData(getRaceResults(currentRace))
  }, [currentRace])

  const nextRace = () => {
    if(currentRace < raceData.length - 1) {
      setCurrentRace(currentRace+1)
    }
  }
  setInterval(nextRace, 3000);
 
  const restart = () => {
    setCurrentRace(0)
  }

  const {title, date} = raceData[currentRace]
    
  return <div style={{display: "flex", "align-items": "center", "justify-content": "center"}}>
    <div>
      <h1>[{currentRace+1}/{raceData.length}] {title} <code>{date}</code></h1>
      <button onClick={() => restart()}>Restart</button>
      <ChartRace data={raceResultData} />
    </div>
  </div>
}

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);
