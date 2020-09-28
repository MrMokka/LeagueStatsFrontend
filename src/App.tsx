import React from 'react';
import './App.css';
import {SummonerData, MatchListData, MatchData,
    ParticipantData, ParticipantIdentitiesData} from './typeList'

let tempDataFile = require('./tempData.json');

const tempSummonerDataa: SummonerData = {
    accountId: tempDataFile["summoner"]["accountId"],
    name: tempDataFile["summoner"]["name"]
};

const temptMatchData = tempDataFile["matchData"] as MatchData;
const tempData = {
    // summoner: JSON.parse(tempDataFile["summoner"]) as SummonerData,
    // matches: JSON.parse(tempDataFile["matches"]) as MatchListData[],
    // matchData: JSON.parse(tempDataFile["matchData"]) as MatchData
}


function App() {
    console.log(tempSummonerDataa);
    console.log(temptMatchData);
    return (
        <div className="App">
            
            
            
        </div>
    );
}

export default App;
