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
 * Рядок фіду. Розкладка на грід-областях, як в event-card:
 * на десктопі час зверху, команди ліворуч, лінія 1X2 праворуч, зірка скраю;
 * на вузьких екранах усе падає в стовпчик, а коефіцієнти йдуть під командами.
 *
 * Жодної фіксованої висоти: дворядкова назва команди розтягує рядок,
 * а за ним — і рамку групи.
 */
export function EventRow({ event, selection, onSelect, favorite, onToggleFavorite }: EventRowProps) {
    const eventLabel = `${event.home.name} — ${event.away.name}`;
    const selectedKey = selection[event.id];

    return (
        <article
            className="grid gap-x-3 bg-(--feed-row-bg) px-3 py-2.5 grid-cols-[minmax(auto,33%)_1fr_auto] grid-rows-[20px_auto] [grid-template-areas:'header_header_favorite'_'event-info_main-markets_favorite'] max-xl:grid-cols-[1fr_auto] max-xl:grid-rows-[auto_auto_auto] max-xl:[grid-template-areas:'header_header'_'event-info_favorite'_'main-markets_main-markets']"
        >
            <p className="[grid-area:header] text-[11px] tracking-[0.5px] text-(--feed-text-muted) uppercase">
                {event.startsAt}
            </p>

            <div className="[grid-area:event-info] flex min-w-0 flex-col justify-center gap-1.5 max-xl:mt-1.5">
                <TeamLine team={event.home} />
                <TeamLine team={event.away} />
            </div>

            <div className="[grid-area:main-markets] grid grid-cols-3 gap-1.5 self-center max-xl:mt-2.5">
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

            <div className="[grid-area:favorite] self-center">
                <FavoriteAction eventLabel={eventLabel} active={favorite} onToggle={onToggleFavorite} />
            </div>
        </article>
    );
}
