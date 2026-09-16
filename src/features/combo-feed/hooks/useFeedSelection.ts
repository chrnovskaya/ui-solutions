import { useCallback, useState } from "react";
import type { FeedEvent, FeedSelection, OutcomeKey } from "../types";

function initialSelection(events: FeedEvent[]): FeedSelection {
    return Object.fromEntries(events.map((event) => [event.id, event.defaultOutcomeKey]));
}

/**
 * Обрані результати по всьому фіду. Повторний тап по вже обраній комірці
 * знімає вибір.
 *
 * @param events - усі події фіду
 *
 * @example
 * const { selection, toggle } = useFeedSelection(events);
 * toggle("torino-roma", "X");
 */
export function useFeedSelection(events: FeedEvent[]) {
    const [selection, setSelection] = useState<FeedSelection>(() => initialSelection(events));

    const toggle = useCallback((eventId: string, key: OutcomeKey) => {
        setSelection((prev) => ({ ...prev, [eventId]: prev[eventId] === key ? null : key }));
    }, []);

    return { selection, toggle };
}
