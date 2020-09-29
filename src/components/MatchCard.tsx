import React, {useState} from 'react'
import {SummonerData, MatchListData} from '../typeList'
import {getChampionById} from '../helperFunctions'

type Props = {
    summoner: SummonerData,
    matchList: MatchListData[]
}

const MatchCard = ({...props}: Props) => {

    const [champion, setChampion] = useState(getChampionById(props.matchList[0].champion));

    return (
        <div>
            <p>{props.summoner.name}</p>
            <p>{champion.name}</p>
            <p>{champion.image.full}</p>
        </div>
    );
};

export default MatchCard;
