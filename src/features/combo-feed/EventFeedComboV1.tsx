import { useComboPicks } from "./hooks/useComboPicks";
import { COMBO_FEED_MOCK } from "./lib/mockFeed";
import type { ComboVariantProps } from "./types";
import { AddComboFab } from "./ui/AddComboFab";
import { ComboBadge } from "./ui/ComboBadge";
import { ComboFeedScope } from "./ui/ComboFeedScope";
import { ComboFrame } from "./ui/ComboFrame";
import { EventRow } from "./ui/EventRow";
import { FavoriteAction } from "./ui/FavoriteAction";
import { TournamentHeader } from "./ui/TournamentHeader";

/**
 * V1 — рамка навколо групи, бейдж з комбо-коефом на верхній межі
 * і кругла кнопка "+", врізана в нижній правий кут.
 *
 * Зони тапу: комірки коефіцієнтів і зірки — самі по собі, груповий CTA —
 * окрема кнопка поза потоком рядків, бейдж некліковний (pointer-events: none).
 *
 * @example
 * <EventFeedComboV1 onAddToBetslip={addPicks} />
 */
export default function EventFeedComboV1({ onAddToBetslip, longNames = false }: ComboVariantProps) {
    const { tournament, events } = COMBO_FEED_MOCK;
    const { selection, toggle, picks, comboOdds, canAdd } = useComboPicks(events);

    return (
        <ComboFeedScope className="bg-(--feed-bg) px-4 pt-3 pb-6">
            <TournamentHeader tournament={tournament} />

            {/* Верхній відступ — місце під бейдж, що навис на межу рамки. */}
            <div className="pt-4">
                <ComboFrame className="pt-4">
                    <div className="flex flex-col gap-1.5">
                        {events.map((event) => (
                            <EventRow
                                key={event.id}
                                event={event}
                                longNames={longNames}
                                selectedKey={selection[event.id]}
                                onSelect={(key) => toggle(event.id, key)}
                                action={<FavoriteAction />}
                            />
                        ))}
                    </div>

                    <ComboBadge odds={comboOdds} />
                    <AddComboFab odds={comboOdds} disabled={!canAdd} onClick={() => onAddToBetslip(picks)} />
                </ComboFrame>
            </div>
        </ComboFeedScope>
    );
}
