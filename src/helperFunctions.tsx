import {data as champData} from './data/championData.json'
import {data as sumSpellData} from './data/summonerSpells.json'
import * as type from './typeList'

import tempDataFile from './tempData.json'

const summoner = tempDataFile["summoner"];
const matchList = tempDataFile["matches"];
const matchData = tempDataFile["matchData"];

export const getChampionById = (id: number): type.Champion => {
    for(let [key, value] of Object.entries(champData)){
        if(value.key === id.toString()) return value;
        if(value.key === id.toString()) value.key = key; //Removes Warning
    }
    let dummy: type.Champion = {
        key: "null",
        name: "null"
    }
    return dummy;
};

export const getSummonerSpellById = (id: number): type.SummonerSpell => {
    for(let [key, value] of Object.entries(sumSpellData)){
        if(value.key === id.toString()) return value;
        if(value.key === id.toString()) value.key = key; //Removes Warning
    }
    let dummy: type.SummonerSpell = {
        id: "null",
        name: "null",
        key: "null"
    }
    return dummy;
};

export const getSummonerSpell = (summoner: type.Summoner, match: type.Match, spellNum: number): type.SummonerSpell => {
    let participant = getParticipant(getParticipantId(summoner, match), match);
    if(!participant) return {key: "", id: "", name: ""};
    return spellNum === 1 ? getSummonerSpellById(participant.spell1Id) : getSummonerSpellById(participant.spell2Id);
};

export const getSummonerSpellImage = (summonerSpell: type.SummonerSpell): string => {
    return `http://ddragon.leagueoflegends.com/cdn/10.19.1/img/spell/${summonerSpell.id}.png`;
};

export const getChampionImage = (champion: type.Champion): string => {
    return `http://ddragon.leagueoflegends.com/cdn/10.19.1/img/champion/${champion.name}.png`;
};

export const getParticipant = (participantId: number, match: type.Match): type.Participant | undefined => {
    return match.participants.find(p => p.participantId === participantId);
};

export const getParticipantId = (summoner: type.Summoner, match: type.Match): number => {
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




