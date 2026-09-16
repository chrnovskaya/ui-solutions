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
 * Комірка коефіцієнта. Власна зона тапу, вища за --combo-tap-size;
 * position: relative тримає її над рештою позиційованих елементів рамки,
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
                "relative flex min-h-13 cursor-pointer flex-col items-center justify-center gap-1",
                "rounded-(--combo-cell-radius) border px-2 py-1.5 transition-colors",
                selected
                    ? "border-(--combo-accent-line) bg-(--combo-accent-soft)"
                    : "border-transparent bg-(--feed-cell-bg)",
            )}
        >
            <span
                className={classNames(
                    "text-[17px] leading-none font-semibold",
                    selected ? "text-(--combo-accent)" : "text-(--feed-odds)",
                )}
            >
                {formatOdds(outcome.odds)}
            </span>
            <span className="text-[11px] leading-none text-(--feed-text-muted)">{outcome.key}</span>
        </button>
    );
}
