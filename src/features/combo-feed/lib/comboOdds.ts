import type { ComboPick } from "../types";

/** Кількість знаків після коми в коефіцієнтах. */
export const ODDS_PRECISION = 2;

/** Менше двох піків — це вже не комбо, CTA неактивний. */
export const MIN_COMBO_PICKS = 2;

/** Заглушка замість коефіцієнта, коли піків недостатньо. */
export const EMPTY_ODDS_LABEL = "—";

/**
 * Комбінований коефіцієнт — добуток коефіцієнтів усіх піків.
 *
 * @param picks - обрані результати
 * @returns добуток коефіцієнтів
 *
 * @example
 * calcComboOdds([{ odds: 1.53 }, { odds: 1.22 }, { odds: 1.2 }]); // 2.23992
 */
export function calcComboOdds(picks: ComboPick[]) {
    return picks.reduce((product, pick) => product * pick.odds, 1);
}

/**
 * Форматує коефіцієнт для показу.
 *
 * @param odds - коефіцієнт або null, якщо піків недостатньо
 * @returns рядок з двома знаками після коми або заглушка
 *
 * @example
 * formatOdds(2.23992); // "2.24"
 * formatOdds(null);    // "—"
 */
export function formatOdds(odds: number | null) {
    return odds === null ? EMPTY_ODDS_LABEL : odds.toFixed(ODDS_PRECISION);
}
