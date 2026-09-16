import { calcComboOdds, formatOdds } from "../lib/comboOdds";
import { pluralizeEvents } from "../lib/plural";
import type { ComboPick } from "../types";

interface BetslipBarProps {
    picks: ComboPick[];
    onClear: () => void;
}

/** Панель купона знизу екрана. З'являється, щойно в купоні щось є. */
export function BetslipBar({ picks, onClear }: BetslipBarProps) {
    if (picks.length === 0) return null;

    return (
        <div className="fixed inset-x-0 bottom-0 z-50 bg-(--feed-surface)">
            <div className="mx-auto flex max-w-(--feed-width) xl:max-w-(--feed-width-desktop) items-center gap-3 border-t border-(--combo-accent-line) px-4 py-3">
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                    <span className="text-[11px] tracking-[0.5px] text-(--feed-text-muted) uppercase">У купоні</span>
                    <span className="text-[14px] font-semibold text-(--feed-text)">
                        {picks.length} {pluralizeEvents(picks.length)} · коеф{" "}
                        <span className="text-(--combo-accent)">{formatOdds(calcComboOdds(picks))}</span>
                    </span>
                </div>

                <button
                    type="button"
                    onClick={onClear}
                    className="min-h-(--combo-tap-size) shrink-0 cursor-pointer rounded-full border border-(--feed-border) px-4 text-[13px] text-(--feed-text)"
                >
                    Очистити
                </button>
            </div>
        </div>
    );
}
