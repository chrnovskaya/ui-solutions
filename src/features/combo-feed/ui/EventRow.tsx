import type { FeedEvent, FeedSelection, OutcomeKey } from "../types";
import { FavoriteAction } from "./FavoriteAction";
import { OddsCell } from "./OddsCell";
import { TeamLine } from "./TeamLine";

interface EventRowProps {
    event: FeedEvent;
    selection: FeedSelection;
    onSelect: (eventId: string, key: OutcomeKey) => void;
    favorite: boolean;
    onToggleFavorite: () => void;
}

/**
 * Рядок фіду в мобільному розкладі: час, дві команди зі слотом дії
 * праворуч і лінія 1X2 під ними.
 *
 * Жодної фіксованої висоти: дворядкова назва команди розтягує рядок,
 * а за ним — і рамку групи.
 */
export function EventRow({ event, selection, onSelect, favorite, onToggleFavorite }: EventRowProps) {
    const eventLabel = `${event.home.name} — ${event.away.name}`;
    const selectedKey = selection[event.id];

    return (
        <article className="rounded-(--combo-row-radius) bg-(--feed-row-bg) px-3 py-2.5">
            <p className="text-[11px] tracking-[0.5px] text-(--feed-text-muted) uppercase">{event.startsAt}</p>

            <div className="mt-1.5 flex items-center gap-2">
                <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                    <TeamLine team={event.home} />
                    <TeamLine team={event.away} />
                </div>
                <FavoriteAction eventLabel={eventLabel} active={favorite} onToggle={onToggleFavorite} />
            </div>

            <div className="mt-2.5 grid grid-cols-3 gap-1.5">
                {event.outcomes.map((outcome) => (
                    <OddsCell
                        key={outcome.key}
                        outcome={outcome}
                        selected={selectedKey === outcome.key}
                        onSelect={() => onSelect(event.id, outcome.key)}
                        eventLabel={eventLabel}
                    />
                ))}
            </div>
        </article>
    );
}
