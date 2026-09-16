import type { FeedEvent } from "../types";

export interface RowSegment {
    /** combo — відрізок, який треба обгорнути рамкою. */
    kind: "plain" | "combo";
    events: FeedEvent[];
}

/**
 * Ріже події турніру на відрізки: звичайні рядки та суцільний блок
 * комбо-групи. Дозволяє малювати рамку рівно навколо групи, не розбиваючи
 * решту списку.
 *
 * @param events - події одного турніру
 * @param comboEventIds - id подій комбо-групи
 *
 * @example
 * splitIntoSegments(serieA, ["b", "c"]);
 * // [{ kind: "plain", events: [a] }, { kind: "combo", events: [b, c] }, { kind: "plain", events: [d] }]
 */
export function splitIntoSegments(events: FeedEvent[], comboEventIds: string[]): RowSegment[] {
    const comboIds = new Set(comboEventIds);

    return events.reduce<RowSegment[]>((segments, event) => {
        const kind: RowSegment["kind"] = comboIds.has(event.id) ? "combo" : "plain";
        const last = segments.at(-1);

        if (last?.kind === kind) {
            last.events.push(event);
            return segments;
        }

        return [...segments, { kind, events: [event] }];
    }, []);
}
