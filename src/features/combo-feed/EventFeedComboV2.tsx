import { useComboPicks } from "./hooks/useComboPicks";
import { COMBO_FEED_MOCK } from "./lib/mockFeed";
import type { ComboVariantProps } from "./types";
import { AddComboAction } from "./ui/AddComboAction";
import { ComboFeedScope } from "./ui/ComboFeedScope";
import { ComboFrame } from "./ui/ComboFrame";
import { EventRow } from "./ui/EventRow";
import { FavoriteAction } from "./ui/FavoriteAction";
import { TournamentHeader } from "./ui/TournamentHeader";

/**
 * V2 — та сама рамка, але без плаваючих елементів: на останньому рядку
 * групи слот зірки займає груповий CTA з комбо-коефом.
 *
 * Зони тапу: CTA живе в сітці рядка й має той самий розмір, що й зірка,
 * тому не перекриває ні комірки коефіцієнтів, ні сусідні рядки.
 *
 * @example
 * <EventFeedComboV2 onAddToBetslip={addPicks} />
 */
export default function EventFeedComboV2({ onAddToBetslip, longNames = false }: ComboVariantProps) {
    const { tournament, events } = COMBO_FEED_MOCK;
    const { selection, toggle, picks, comboOdds, canAdd } = useComboPicks(events);
    const lastIndex = events.length - 1;

    return (
        <ComboFeedScope className="bg-(--feed-bg) px-4 pt-3 pb-6">
            <TournamentHeader tournament={tournament} />

            <div className="pt-3">
                <ComboFrame>
                    <div className="flex flex-col gap-1.5">
                        {events.map((event, index) => (
                            <EventRow
                                key={event.id}
                                event={event}
                                longNames={longNames}
                                selectedKey={selection[event.id]}
                                onSelect={(key) => toggle(event.id, key)}
                                action={
                                    index === lastIndex ? (
                                        <AddComboAction
                                            odds={comboOdds}
                                            disabled={!canAdd}
                                            onClick={() => onAddToBetslip(picks)}
                                        />
                                    ) : (
                                        <FavoriteAction />
                                    )
                                }
                            />
                        ))}
                    </div>
                </ComboFrame>
            </div>
        </ComboFeedScope>
    );
}
