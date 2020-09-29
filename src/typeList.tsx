
export type Summoner = {
    accountId: string,
    name: string
};

export type Player = {
    accountId: string,
    summonerName: string,
    summonerId: string
}

export type MatchList = {
    gameId: number,
    champion: number,
    timestamp: number,
    role: string,
    lane: string
};

export type Stats = {
    win: boolean,
    kills: number,
    deaths: number,
    assists: number,
    champLevel: number
}

export type Participant = {
    participantId: number,
    championId: number,
    spell1Id: number,
    spell2Id: number,
    stats: Stats
};

export type ParticipantIdentities = {
    participantId: number,
    player: Player
};

export type Team = {
    win: string
};

export type Match = {
    gameId: number,
    gameDuration: number,
    gameMode: string,
    gameType: string,
    teams: Team[],
    participants: Participant[],
    participantIdentities: ParticipantIdentities[],
};



export type Champion = {
    key: string,
    name: string
}

