import {data} from './championData.json'
import {ChampionData} from './typeList'

export const getChampionById = (id: number): ChampionData => {
    // @ts-ignore: Unreachable code error
    for(let [key, value] of Object.entries(data)){
        if(value.key === id.toString()) return value;
        if(value.key === id.toString()) value.key = key; //Removes Warning
    }
    let dummy: ChampionData = {
        key: "null",
        name: "null"
    }
    return dummy;
};

export const getChampionImage = (champion: ChampionData): string => {
    return `http://ddragon.leagueoflegends.com/cdn/10.19.1/img/champion/${champion.name}.png`;
};

