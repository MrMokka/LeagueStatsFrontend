import React from 'react';
import './App.css';
import * as type from './typeList'

import tempDataFile from './tempData.json'

const summoner = tempDataFile["summoner"];
const matches = tempDataFile["matches"];
const matchData = tempDataFile["matchData"];


function App() {
    console.log(summoner);
    console.log(matches);
    console.log(matchData);
    return (
        <div className="App">
            
            
            
        </div>
    );
}

export default App;
