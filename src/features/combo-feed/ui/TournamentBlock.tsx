import { splitIntoSegments } from "../lib/splitIntoSegments";
import type { ComboPick, FeedEvent, FeedSelection, OutcomeKey, TournamentBlock as TournamentBlockData } from "../types";
import { AddComboFab } from "./AddComboFab";
import { ComboBadge } from "./ComboBadge";
import { ComboFrame } from "./ComboFrame";
import { EventRow } from "./EventRow";
import { TournamentHeader } from "./TournamentHeader";

interface TournamentBlockProps {
    block: TournamentBlockData;
    comboEventIds: string[];
    selection: FeedSelection;
    onSelect: (eventId: string, key: OutcomeKey) => void;
    isFavorite: (eventId: string) => boolean;
    onToggleFavorite: (eventId: string) => void;
    collapsed: boolean;
    onToggleCollapsed: () => void;
    comboOdds: number | null;
    comboPicks: ComboPick[];
    comboAdded: boolean;
    onToggleCombo: () => void;
}

/**
 * Блок одного турніру: шапка лежить впритул на списку матчів, тому блок
 * читається як одна панель, а не як набір окремих карток.
 *
 * Події ріжуться на відрізки, і рамку отримує тільки відрізок комбо-групи —
 * решта лишається звичайними рядками фіду.
 *
 * Блок навмисно без overflow: hidden — бейдж і кругла кнопка звисають
 * за межі рамки, і обрізання їх зʼїло б.
 */
export function TournamentBlock({
    block,
    comboEventIds,
    selection,
    onSelect,
    isFavorite,
    onToggleFavorite,
    collapsed,
    onToggleCollapsed,
    comboOdds,
    comboPicks,
    comboAdded,
    onToggleCombo,
}: TournamentBlockProps) {
    const segments = splitIntoSegments(block.events, comboEventIds);
    const lastEventId = block.events.at(-1)?.id;

    const renderRows = (events: FeedEvent[]) =>
        events.map((event) => (
            <EventRow
                key={event.id}
                event={event}
                lastInBlock={event.id === lastEventId}
                selection={selection}
                onSelect={onSelect}
                favorite={isFavorite(event.id)}
                onToggleFavorite={() => onToggleFavorite(event.id)}
            />
        ));

    return (
        <section className="flex flex-col gap-0.5">
            <TournamentHeader tournament={block.tournament} collapsed={collapsed} onToggle={onToggleCollapsed} />

            {!collapsed && (
                <div className="flex flex-col gap-0.5">
                    {segments.map((segment, index) =>
                        segment.kind === "combo" ? (
                            // Вузький відступ згори — рівно під навис бейджа.
                            <div key={`combo-${index}`} className="pt-1.5">
                                <ComboFrame>
                                    <div className="flex flex-col gap-0.5">{renderRows(segment.events)}</div>
                                    <ComboBadge odds={comboOdds} />
                                    <AddComboFab
                                        odds={comboOdds}
                                        disabled={comboPicks.length === 0 || comboOdds === null}
                                        added={comboAdded}
                                        onClick={onToggleCombo}
                                    />
                                </ComboFrame>
                            </div>
                        ) : (
                            <div key={`plain-${index}`} className="flex flex-col gap-0.5">
                                {renderRows(segment.events)}
                            </div>
                        ),
                    )}
                </div>
            )}
        </section>
    );
}
