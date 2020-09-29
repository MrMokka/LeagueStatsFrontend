
export type SummonerData = {
    accountId: string,
    name: string
};

export type MatchListData = {
    gameId: number,
    champion: number,
    timestamp: number,
    role: string,
    lane: string
};

export type ParticipantData = {

};

export type ParticipantIdentitiesData = {
    participantId: number,
    player: {
        accountId: string,
        summonerName: string,
        summonerId: string
    }
};

export type MatchData = {
    gameId: number,
    participants: ParticipantData[],
    participantIdentities: ParticipantIdentitiesData[],
};



