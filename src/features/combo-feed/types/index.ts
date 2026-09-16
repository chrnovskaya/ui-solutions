/** Ключ результату в лінії 1X2. */
export type OutcomeKey = "1" | "X" | "2";

export interface Outcome {
    key: OutcomeKey;
    odds: number;
}

export interface Team {
    name: string;
    /** Монограма замість емблеми клубу. */
    monogram: string;
    /** Колір монограми. */
    color: string;
}

export interface FeedEvent {
    id: string;
    /** Час початку в форматі фіду, напр. "TODAY, 19:30". */
    startsAt: string;
    home: Team;
    away: Team;
    /** Рівно три результати: 1, X, 2. */
    outcomes: Outcome[];
    /** Пік, підсвічений одразу. Є тільки в подій комбо-групи. */
    defaultOutcomeKey: OutcomeKey | null;
}

export interface Tournament {
    id: string;
    flag: string;
    title: string;
}

export interface TournamentBlock {
    tournament: Tournament;
    events: FeedEvent[];
}

export interface FeedData {
    blocks: TournamentBlock[];
    /** Події комбо-групи. Мають іти підряд у межах одного турніру. */
    comboEventIds: string[];
}

/** Обраний результат конкретної події. */
export interface ComboPick {
    eventId: string;
    outcomeKey: OutcomeKey;
    odds: number;
}

/** Обрані результати по всьому фіду: id події -> ключ результату. */
export type FeedSelection = Record<string, OutcomeKey | null>;
