import { useId } from "react";
import { useEscapeKey } from "../hooks/useEscapeKey";
import { formatOdds } from "../lib/comboOdds";
import type { ComboPick, FeedEvent } from "../types";

interface ComboSheetProps {
    open: boolean;
    onClose: () => void;
    events: FeedEvent[];
    picks: ComboPick[];
    comboOdds: number | null;
    canAdd: boolean;
    longNames: boolean;
    onAdd: () => void;
}

/**
 * Bottom sheet з деталями комбо: список піків, підсумковий коефіцієнт
 * і кнопка додавання. Ширина обмежена --phone-width, щоб на десктопі
 * шторка лишалась у межах мобільного фрейму.
 */
export function ComboSheet({ open, onClose, events, picks, comboOdds, canAdd, longNames, onAdd }: ComboSheetProps) {
    const titleId = useId();
    useEscapeKey(open, onClose);

    if (!open) return null;

    const eventById = new Map(events.map((event) => [event.id, event]));

    return (
        <>
            <button
                type="button"
                onClick={onClose}
                aria-label="Закрити деталі комбо"
                className="fixed inset-0 z-40 cursor-default bg-(--feed-scrim)"
            />

            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                className="fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-(--phone-width) rounded-t-2xl border-t border-(--combo-accent-line) bg-(--feed-row-bg) px-4 pt-3 pb-5"
            >
                <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-(--feed-border)" aria-hidden="true" />

                <h2 id={titleId}>
                    Комбо з {picks.length} подій
                </h2>

                <ul className="mt-3 flex flex-col gap-2">
                    {picks.map((pick) => {
                        const event = eventById.get(pick.eventId);
                        if (!event) return null;

                        const home = longNames ? event.home.longName : event.home.name;
                        const away = longNames ? event.away.longName : event.away.name;

                        return (
                            <li key={pick.eventId} className="flex items-center gap-3">
                                <span className="min-w-0 flex-1 text-[13px] leading-tight text-(--feed-text)">
                                    {home} — {away}
                                </span>
                                <span className="shrink-0 rounded bg-(--feed-cell-bg) px-1.5 py-0.5 text-[11px] text-(--feed-text-muted)">
                                    {pick.outcomeKey}
                                </span>
                                <span className="w-12 shrink-0 text-right text-[13px] font-medium text-(--combo-accent)">
                                    {formatOdds(pick.odds)}
                                </span>
                            </li>
                        );
                    })}
                </ul>

                <div className="mt-4 flex items-center justify-between border-t border-(--feed-border) pt-3">
                    <span className="text-[13px] text-(--feed-text-muted)">Комбінований коефіцієнт</span>
                    <span className="text-[18px] leading-none font-semibold text-(--combo-accent)">
                        {formatOdds(comboOdds)}
                    </span>
                </div>

                <button
                    type="button"
                    onClick={onAdd}
                    disabled={!canAdd}
                    className="mt-3 flex min-h-(--combo-tap-size) w-full cursor-pointer items-center justify-center rounded-xl bg-(--combo-accent) text-[15px] font-semibold text-(--combo-accent-ink) disabled:cursor-not-allowed disabled:opacity-40"
                >
                    Додати в купон
                </button>
            </div>
        </>
    );
}
