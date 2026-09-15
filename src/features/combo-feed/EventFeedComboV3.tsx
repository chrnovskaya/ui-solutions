import { useState } from "react";
import { useComboPicks } from "./hooks/useComboPicks";
import { COMBO_FEED_MOCK } from "./lib/mockFeed";
import { formatOdds } from "./lib/comboOdds";
import type { ComboVariantProps } from "./types";
import { ComboFeedScope } from "./ui/ComboFeedScope";
import { ComboFrame } from "./ui/ComboFrame";
import { ComboSheet } from "./ui/ComboSheet";
import { EventRow } from "./ui/EventRow";
import { FavoriteAction } from "./ui/FavoriteAction";
import { TournamentHeader } from "./ui/TournamentHeader";

/**
 * V3 — рамка без плаваючих елементів. Тап по будь-якому вільному місцю
 * в її межах відкриває bottom sheet з деталями комбо.
 *
 * Зони тапу розділені не через stopPropagation, а порядком малювання:
 * кнопка-оверлей іде першою в DOM і лежить під рядками, а комірки
 * коефіцієнтів та зірки мають position: relative і тому перехоплюють
 * свої тапи самі.
 *
 * @example
 * <EventFeedComboV3 onAddToBetslip={addPicks} />
 */
export default function EventFeedComboV3({ onAddToBetslip, longNames = false }: ComboVariantProps) {
    const { tournament, events } = COMBO_FEED_MOCK;
    const { selection, toggle, picks, comboOdds, canAdd } = useComboPicks(events);
    const [isSheetOpen, setSheetOpen] = useState(false);

    const handleAdd = () => {
        onAddToBetslip(picks);
        setSheetOpen(false);
    };

    return (
        <ComboFeedScope className="bg-(--feed-bg) px-4 pt-3 pb-6">
            <TournamentHeader tournament={tournament} />

            <div className="pt-3">
                <ComboFrame>
                    <button
                        type="button"
                        onClick={() => setSheetOpen(true)}
                        aria-label={`Показати деталі комбо ${formatOdds(comboOdds)}`}
                        className="absolute inset-0 cursor-pointer rounded-(--combo-radius)"
                    />

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
                </ComboFrame>
            </div>

            <ComboSheet
                open={isSheetOpen}
                onClose={() => setSheetOpen(false)}
                events={events}
                picks={picks}
                comboOdds={comboOdds}
                canAdd={canAdd}
                longNames={longNames}
                onAdd={handleAdd}
            />
        </ComboFeedScope>
    );
}
