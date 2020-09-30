import React from 'react';
import './App.css';
import MatchCard from './components/MatchCard'
import * as helper from './helperFunctions'
import * as type from './typeList'




const App = () => {

    

    const createMatchCards = () => {
        const matches = helper.getMatchlistByAccoutId(123456789);
        const summoner = helper.getSummonerByName("MrMokkaa");
        return matches.map(m => <MatchCard summoner={summoner} matchListShort={m} match={helper.getMatchById(m.gameId)} />)
    };
    
    return (
        <div className="App">
            <div className="matchCards">
                {createMatchCards()}
            </div>
        </div>
    );
};

export default App;
