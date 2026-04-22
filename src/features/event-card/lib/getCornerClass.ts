/**
 * Повертає Tailwind-класи для заокруглення кутів елемента в гріді.
 * Визначає позицію елемента (кут сітки) і додає відповідний клас.
 *
 * @param index - індекс елемента
 * @param total - загальна кількість елементів
 * @param columns - кількість колонок у гріді
 * @returns рядок Tailwind-класів для border-radius ("rounded-tl-[20px]", "rounded-tr-[20px]" тощо)
 *
 * @example
 * getCornerClass(0, 6, 3); // "rounded-tl-[20px]"
 * getCornerClass(2, 6, 3); // "rounded-tr-[20px]"
 * getCornerClass(3, 6, 3); // "rounded-bl-[20px]"
 * getCornerClass(5, 6, 3); // "rounded-br-[20px]"
 */
export function getCornerClass(index: number, total: number, columns: number) {
    const row = Math.floor(index / columns);
    const col = index % columns;
    const totalRows = Math.ceil(total / columns);

    const isFirstRow = row === 0;
    const isLastRow = row === totalRows - 1;
    const isFirstCol = col === 0;
    const isLastCol = col === columns - 1;
    const isLastItem = index === total - 1;

    const classes: string[] = [];
    if (isFirstRow && isFirstCol) classes.push("rounded-tl-[20px]");
    if (isFirstRow && isLastCol) classes.push("rounded-tr-[20px]");
    if (isLastRow && isFirstCol) classes.push("rounded-bl-[20px]");
    if (isLastItem) classes.push("rounded-br-[20px]");
    return [...new Set(classes)].join(" ");
}
