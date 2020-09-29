import {data} from './championData.json'
import {ChampionData} from './typeList'

export const getChampionById = (id: number): ChampionData => {
    for(const [key, value] of Object.entries(data)){
        if(value.key === id.toString()) return value;
    }
    let dummy: ChampionData = {
        key: "null",
        name: "null",
        image: {
            full: "null"
        }
    }
    return dummy;
};

export const getChampionImage = (champion: ChampionData) => {


};

