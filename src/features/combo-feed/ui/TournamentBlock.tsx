import { splitIntoSegments } from "../lib/splitIntoSegments";
import type { ComboPick, FeedSelection, OutcomeKey, TournamentBlock as TournamentBlockData } from "../types";
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
 * Блок одного турніру. Події ріжуться на відрізки, і тільки відрізок
 * комбо-групи отримує рамку з бейджем і кнопкою — решта лишається
 * звичайними рядками фіду.
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

    const renderRows = (events: TournamentBlockData["events"]) =>
        events.map((event) => (
            <EventRow
                key={event.id}
                event={event}
                selection={selection}
                onSelect={onSelect}
                favorite={isFavorite(event.id)}
                onToggleFavorite={() => onToggleFavorite(event.id)}
            />
        ));

    return (
        <section className="flex flex-col gap-1.5">
            <TournamentHeader
                tournament={block.tournament}
                collapsed={collapsed}
                onToggle={onToggleCollapsed}
            />

            {!collapsed &&
                segments.map((segment, index) =>
                    segment.kind === "combo" ? (
                        // Відступ згори лишає місце бейджу, що навис на межу рамки.
                        <div key={`combo-${index}`} className="pt-3">
                            <ComboFrame className="pt-4">
                                <div className="flex flex-col gap-1.5">{renderRows(segment.events)}</div>
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
                        <div key={`plain-${index}`} className="flex flex-col gap-1.5">
                            {renderRows(segment.events)}
                        </div>
                    ),
                )}
        </section>
    );
}
