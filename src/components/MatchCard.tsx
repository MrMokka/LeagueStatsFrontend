import React from 'react'
import {SummonerData, MatchListData} from '../typeList'
import {getChampionById} from '../helperFunctions'

type Props = {
    summoner: SummonerData,
    matchList: MatchListData
}

export function MatchCard({...props}: Props){


    return (
        <div>
            {/*<p>{props.summoner.name}</p>
            <p>{getChampionById(props.matchList.champion)}</p>
            */}
        </div>
    );
}
