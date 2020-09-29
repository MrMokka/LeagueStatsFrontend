import React from 'react';
import './App.css';
import MatchCard from './components/MatchCard'
import * as type from './typeList'

import tempDataFile from './tempData.json'

const summoner = tempDataFile["summoner"];
const matches = tempDataFile["matches"];
const matchData = tempDataFile["matchData"];


const App = () => {
    console.log(summoner);
    console.log(matches);
    console.log(matchData);
    return (
        <div className="App">
            
            <MatchCard summoner={summoner} matchList={matches} />
            
        </div>
    );
};

export default App;
