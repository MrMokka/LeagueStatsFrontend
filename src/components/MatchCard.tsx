import React, {useState} from 'react'
import {Summoner, Match, MatchList, TimeConverted} from '../typeList'
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

    const formatGameDuration = () => {
        const time: TimeConverted = helper.getMatchTimeConverted(match.gameDuration);
        if(time.hours === 0) return `${time.minutes}m ${time.seconds}s`
        return `${time.hours}h ${time.minutes}m ${time.seconds}s`
    };

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
                <hr></hr>
                <div>{formatGameDuration()}</div>
            </div>
            <div className="champInfo">
                <img className="champImage" src={helper.getChampionImage(champion)} alt="ChampImage" />
                {champion.name}
            </div>
            
            

        </div>
    );
};

export default MatchCard;

