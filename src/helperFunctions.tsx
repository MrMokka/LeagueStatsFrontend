import {data} from './championData.json'
import {Champion, Summoner, Match} from './typeList'

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

    return match.participantIdentities.find(id => id.player.summonerName === summoner.name) || -1;

};
