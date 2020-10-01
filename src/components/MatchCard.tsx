import React, {useState} from 'react'
import {Summoner, Match, MatchList, TimeConverted, Participant} from '../typeList'
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

    const getSummonerSpellIamge = (spellNum: number): string => {
        let participant = helper.getParticipant(helper.getParticipantId(props.summoner, match), match);
        if(!participant) return "";
        if(spellNum === 1) return helper.getSummonerSpellImage(helper.getSummonerSpellById(participant.spell1Id));
        if(spellNum === 2 )return helper.getSummonerSpellImage(helper.getSummonerSpellById(participant.spell2Id));
        return "";
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
                <div className="imageSumsRunes">
                    <img className="champImage" src={helper.getChampionImage(champion)} alt="ChampImage" />
                    <div className="summonerSpells">
                        <img className="summonerSpellImage" src={helper.getSummonerSpellImage(helper.getSummonerSpell(props.summoner, match, 2))} />
                        <img className="summonerSpellImage" src={helper.getSummonerSpellImage(helper.getSummonerSpell(props.summoner, match, 1))} />
                    </div>
                    <div className="runes">
                        <img className="runeImage" src={helper.getSummonerSpellImage(helper.getSummonerSpell(props.summoner, match, 1))} />
                        <img className="runeImage" src={helper.getSummonerSpellImage(helper.getSummonerSpell(props.summoner, match, 2))} />
                    </div>
                    
                </div>
                {champion.name}
            </div>
            
            

        </div>
    );
};

export default MatchCard;

