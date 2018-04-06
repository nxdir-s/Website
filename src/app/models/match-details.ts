export class MatchDetails {
    Champion: string;
    Kills: number;
    Deaths: number;
    Assists: number;
    Win: boolean;
    TotalMinionsKilled: number;
    CreepsPerMin: number;
    CsDiffPerMin: number;
    ExpDiffPerMin: number;
    PhysicalDamageDealt: number;
    MagicDamageDealt: number;
    TotalDamageDealtToChampions: number;
    ChampLevel: number;
}

export class MatchDetailFilter {
    AccountId: string;
    Queue: string;
}