import classNames from "classnames";
import { formatOdds } from "../lib/comboOdds";
import type { Outcome } from "../types";

interface OddsCellProps {
    outcome: Outcome;
    selected: boolean;
    onSelect: () => void;
    /** Для доступної назви кнопки: "Torino — Roma". */
    eventLabel: string;
}

/**
 * Комірка коефіцієнта. Це власна зона тапу висотою від --combo-tap-size;
 * position: relative піднімає її над кнопкою-оверлеєм рамки у V3,
 * тому тап по коефіцієнту ніколи не спрацьовує як тап по групі.
 */
export function OddsCell({ outcome, selected, onSelect, eventLabel }: OddsCellProps) {
    return (
        <button
            type="button"
            onClick={onSelect}
            aria-pressed={selected}
            aria-label={`${eventLabel}, ${outcome.key}, ${formatOdds(outcome.odds)}`}
            className={classNames(
                "relative flex min-h-(--combo-tap-size) cursor-pointer flex-col items-center justify-center gap-0.5",
                "rounded-(--combo-cell-radius) border px-2 py-1.5 transition-colors",
                selected
                    ? "border-(--combo-accent-line) bg-(--combo-accent-soft)"
                    : "border-transparent bg-(--feed-cell-bg)",
            )}
        >
            <span
                className={classNames(
                    "text-[15px] font-medium leading-none",
                    selected ? "text-(--combo-accent)" : "text-(--feed-odds)",
                )}
            >
                {formatOdds(outcome.odds)}
            </span>
            <span className="text-[10px] leading-none text-(--feed-text-muted)">{outcome.key}</span>
        </button>
    );
}
