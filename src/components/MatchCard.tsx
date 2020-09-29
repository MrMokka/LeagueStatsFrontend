import React, {useState} from 'react'
import {Summoner, Match} from '../typeList'
import {getChampionById, getChampionImage} from '../helperFunctions'
import '../css/MatchCard.css'

type Props = {
    summoner: Summoner,
    match: Match
}

const MatchCard = ({...props}: Props) => {
    const [player, setPlayer] = useState();
    const [champion, setChampion] = useState(getChampionById(props.match.));
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
                Normal
                2 days ago
                --------
                {}
            </div>
            <div className="champInfo">
                <img className="champImage" src={getChampionImage(champion)} alt="ChampImage" />
                {champion.name}
            </div>
            
            

        </div>
    );
};

export default MatchCard;
