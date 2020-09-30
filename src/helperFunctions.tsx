import {data} from './championData.json'
import * as type from './typeList'

import tempDataFile from './tempData.json'

const summoner = tempDataFile["summoner"];
const matchList = tempDataFile["matches"];
const matchData = tempDataFile["matchData"];

export const getChampionById = (id: number): type.Champion => {
    // @ts-ignore: Unreachable code error
    for(let [key, value] of Object.entries(data)){
        if(value.key === id.toString()) return value;
        if(value.key === id.toString()) value.key = key; //Removes Warning
    }
    let dummy: type.Champion = {
        key: "null",
        name: "null"
    }
    return dummy;
};

export const getChampionImage = (champion: type.Champion): string => {
    return `http://ddragon.leagueoflegends.com/cdn/10.19.1/img/champion/${champion.name}.png`;
};

export const getSummonerSpellImage = (summonerSpell: type.SummonerSpell): string => {
    return `http://ddragon.leagueoflegends.com/cdn/10.20.1/img/spell/${summonerSpell.name}.png`;
};

export const getParticipationId = (summoner: type.Summoner, match: type.Match): number => {
    return match.participantIdentities.find(id => id.player.summonerName === summoner.name)?.participantId || -1;
};

export const getMatchById = (matchId: number): type.Match => {
    return matchData;
    //`https://euw1.api.riotgames.com/lol/match/v4/matches/${id}`
};

export const getMatchlistByAccoutId = (accountId: number): type.MatchList[] => {
    return matchList;
    //TODO: Add filters here, is be important also
    //`https://euw1.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}`
};

export const getSummonerByName = (summonerName: string): type.Summoner => {
    return summoner;
    //`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`
};

export const getSummonerByAccountId = (accountId: number): type.Summoner => {
    return summoner;
    //`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-account/${accountId}`
};

export const getMatchTimeConverted = (matchTimeSec: number): type.TimeConverted => {
    const hours = Math.floor(matchTimeSec / 60 / 60)
    return {
        hours: hours,
        minutes: Math.floor(matchTimeSec / 60) - (hours * 60),
        seconds: matchTimeSec & 60
    }
}




