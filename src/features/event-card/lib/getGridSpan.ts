import { lcm } from "./math";

/**
 * Обчислює grid span для елементів останнього рядка, щоб вони рівномірно
 * заповнювали ширину гріда. Для елементів не в останньому рядку повертає undefined.
 *
 * @param index - індекс елемента
 * @param total - загальна кількість елементів
 * @param columns - кількість колонок
 * @returns span для gridColumn або undefined
 *
 * @example
 * // 5 елементів у 3 колонки — останній рядок має 2 елементи
 * getGridSpan(0, 5, 3); // undefined (не останній рядок)
 * getGridSpan(3, 5, 3); // 3 (останній рядок, span = lcm(3,2)/2 = 3)
 */
export function getGridSpan(index: number, total: number, columns: number) {
    const lastRowCount = total % columns || columns;
    if (lastRowCount === columns) return undefined;

    const lastRowStart = Math.floor((total - 1) / columns) * columns;
    if (index < lastRowStart) return undefined;

    const subCols = lcm(columns, lastRowCount);
    return subCols / lastRowCount;
}
