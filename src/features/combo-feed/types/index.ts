/** Ключ результату в лінії 1X2. */
export type OutcomeKey = "1" | "X" | "2";

export interface Outcome {
    key: OutcomeKey;
    odds: number;
}

export interface Team {
    /** Коротка назва — так команда підписана у фіді. */
    name: string;
    /** Довга назва — щоб перевіряти перенос у два рядки. */
    longName: string;
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
    /** Результат, обраний за замовчуванням — пік для комбо. */
    defaultOutcomeKey: OutcomeKey;
}

export interface Tournament {
    flag: string;
    title: string;
}

export interface ComboFeedData {
    tournament: Tournament;
    events: FeedEvent[];
}

/** Обраний результат конкретної події. */
export interface ComboPick {
    eventId: string;
    outcomeKey: OutcomeKey;
    odds: number;
}

/** Спільний контракт усіх трьох варіантів прототипу. */
export interface ComboVariantProps {
    onAddToBetslip: (picks: ComboPick[]) => void;
    /** Підставити довгі назви команд — стрес-тест переносу рядків. */
    longNames?: boolean;
}
