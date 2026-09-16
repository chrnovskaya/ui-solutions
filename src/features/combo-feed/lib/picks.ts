import type { ComboPick, FeedEvent, FeedSelection } from "../types";

/**
 * Збирає піки з обраних результатів. Події без вибору пропускаються.
 *
 * @param events - події, з яких збирати
 * @param selection - поточний вибір по всьому фіду
 * @returns масив піків у порядку подій
 *
 * @example
 * collectPicks(comboEvents, selection); // [{ eventId: "torino-roma", outcomeKey: "2", odds: 1.53 }, ...]
 */
export function collectPicks(events: FeedEvent[], selection: FeedSelection): ComboPick[] {
    return events.flatMap((event) => {
        const key = selection[event.id];
        if (!key) return [];

        const outcome = event.outcomes.find((item) => item.key === key);
        return outcome ? [{ eventId: event.id, outcomeKey: key, odds: outcome.odds }] : [];
    });
}

/**
 * Чи це той самий набір піків — щоб зрозуміти, що комбо вже лежить у купоні.
 *
 * @example
 * samePicks(comboPicks, slip); // true
 */
export function samePicks(a: ComboPick[], b: ComboPick[]) {
    if (a.length !== b.length) return false;

    const keyOf = (pick: ComboPick) => `${pick.eventId}:${pick.outcomeKey}`;
    const inB = new Set(b.map(keyOf));
    return a.every((pick) => inB.has(keyOf(pick)));
}
