import React, {useState} from 'react'
import {Summoner, Match, MatchList} from '../typeList'
import * as helper from '../helperFunctions'
import '../css/MatchCard.css'

type Props = {
    summoner: Summoner,
    match: Match
    matchListShort: MatchList
}

const MatchCard = ({...props}: Props) => {
    const [player, setPlayer] = useState();
    const [champion, setChampion] = useState(helper.getChampionById(props.matchListShort.champion));
    const [match, seMatch] = useState(props.match);

    return (
        <div className="matchCard">
            {/*
            Timestamp, win/loss, gametime
            Champ image, champ name
            summoner spells
            runes
            kda
            Stats(lvl, cs, kp)
            items
            team
            */}
            <div className="timeInfo">
                <div>Normal</div>
                <div>2 days ago</div>
                <div>--------</div>
                <div>{}</div>
            </div>
            <div className="champInfo">
                <img className="champImage" src={helper.getChampionImage(champion)} alt="ChampImage" />
                {champion.name}
            </div>
            
            

        </div>
    );
};

export default MatchCard;
