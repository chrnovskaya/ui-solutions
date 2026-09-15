import { useCallback, useMemo, useState } from "react";
import { MIN_COMBO_PICKS, calcComboOdds } from "../lib/comboOdds";
import type { ComboPick, FeedEvent, OutcomeKey } from "../types";

type Selection = Record<string, OutcomeKey | null>;

function initialSelection(events: FeedEvent[]): Selection {
    return Object.fromEntries(events.map((event) => [event.id, event.defaultOutcomeKey]));
}

/**
 * Тримає обрані результати по кожній події групи та рахує комбо.
 * Повторний тап по вже обраній комірці знімає вибір — так видно
 * і стан, коли піків замало для комбо.
 *
 * @param events - події групи
 *
 * @example
 * const { selection, toggle, picks, comboOdds, canAdd } = useComboPicks(events);
 * toggle("torino-roma", "X");
 */
export function useComboPicks(events: FeedEvent[]) {
    const [selection, setSelection] = useState<Selection>(() => initialSelection(events));

    const toggle = useCallback((eventId: string, key: OutcomeKey) => {
        setSelection((prev) => ({ ...prev, [eventId]: prev[eventId] === key ? null : key }));
    }, []);

    const picks = useMemo<ComboPick[]>(
        () =>
            events.flatMap((event) => {
                const key = selection[event.id];
                if (!key) return [];

                const outcome = event.outcomes.find((item) => item.key === key);
                return outcome ? [{ eventId: event.id, outcomeKey: key, odds: outcome.odds }] : [];
            }),
        [events, selection],
    );

    const comboOdds = picks.length >= MIN_COMBO_PICKS ? calcComboOdds(picks) : null;

    return { selection, toggle, picks, comboOdds, canAdd: comboOdds !== null };
}
