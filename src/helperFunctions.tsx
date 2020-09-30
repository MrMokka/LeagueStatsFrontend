import {data} from './championData.json'
import {Champion, Summoner, Match, MatchList} from './typeList'

import tempDataFile from './tempData.json'

const summoner = tempDataFile["summoner"];
const matchList = tempDataFile["matches"];
const matchData = tempDataFile["matchData"];

export const getChampionById = (id: number): Champion => {
    // @ts-ignore: Unreachable code error
    for(let [key, value] of Object.entries(data)){
        if(value.key === id.toString()) return value;
        if(value.key === id.toString()) value.key = key; //Removes Warning
    }
    let dummy: Champion = {
        key: "null",
        name: "null"
    }
    return dummy;
};

export const getChampionImage = (champion: Champion): string => {
    return `http://ddragon.leagueoflegends.com/cdn/10.19.1/img/champion/${champion.name}.png`;
};

export const getParticipationId = (summoner: Summoner, match: Match): number => {
    return match.participantIdentities.find(id => id.player.summonerName === summoner.name)?.participantId || -1;
};

export const getMatchById = (matchId: number): Match => {
    return matchData;
    //`https://euw1.api.riotgames.com/lol/match/v4/matches/${id}`
};

export const getMatchlistByAccoutId = (accountId: number): MatchList[] => {
    return matchList;
    //TODO: Add filters here, is be important also
    //`https://euw1.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}`
};

export const getSummonerByName = (summonerName: string): Summoner => {
    return summoner;
    //`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`
};

export const getSummonerByAccountId = (accountId: number): Summoner => {
    return summoner;
    //`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-account/${accountId}`
};

