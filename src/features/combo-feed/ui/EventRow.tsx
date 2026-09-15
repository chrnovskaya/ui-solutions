import type { ReactNode } from "react";
import type { FeedEvent, OutcomeKey } from "../types";
import { OddsCell } from "./OddsCell";
import { TeamLine } from "./TeamLine";

interface EventRowProps {
    event: FeedEvent;
    longNames: boolean;
    selectedKey: OutcomeKey | null;
    onSelect: (key: OutcomeKey) => void;
    /** Слот праворуч від назв команд: зірка або груповий CTA у V2. */
    action: ReactNode;
}

/**
 * Рядок фіду в мобільному розкладі: час, дві команди зі слотом дії
 * праворуч і лінія 1X2 під ними.
 *
 * Жодної фіксованої висоти: дворядкова назва команди розтягує рядок,
 * а за ним — і рамку групи.
 */
export function EventRow({ event, longNames, selectedKey, onSelect, action }: EventRowProps) {
    const homeName = longNames ? event.home.longName : event.home.name;
    const awayName = longNames ? event.away.longName : event.away.name;
    const eventLabel = `${homeName} — ${awayName}`;

    return (
        <article className="rounded-(--combo-row-radius) bg-(--feed-row-bg) px-3 py-2.5">
            <p className="text-[11px] tracking-[0.5px] text-(--feed-text-muted) uppercase">{event.startsAt}</p>

            <div className="mt-1.5 flex items-center gap-2">
                <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                    <TeamLine team={event.home} name={homeName} />
                    <TeamLine team={event.away} name={awayName} />
                </div>
                {action}
            </div>

            <div className="mt-2.5 grid grid-cols-3 gap-1.5">
                {event.outcomes.map((outcome) => (
                    <OddsCell
                        key={outcome.key}
                        outcome={outcome}
                        selected={selectedKey === outcome.key}
                        onSelect={() => onSelect(outcome.key)}
                        eventLabel={eventLabel}
                    />
                ))}
            </div>
        </article>
    );
}
