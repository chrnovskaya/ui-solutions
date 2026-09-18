/**
 * Піднімає закріплені категорії на початок списку.
 *
 * Усередині закріплених порядок — той, у якому їх закріплювали: щойно
 * закріплена стає останньою серед закріплених і далі не рухається. Так
 * позиція залежить тільки від дій користувача, і закріплення нової категорії
 * не штовхає вже закріплені.
 *
 * Незакріплені лишаються у вихідному порядку списку.
 *
 * Якщо закріплених немає, повертає той самий масив: список поводиться
 * рівно так, як до вмикання функції.
 *
 * @param categories - категорії у вихідному порядку
 * @param pinnedIds - id закріплених категорій у порядку закріплення
 *
 * @example
 * sortByPinned([{ id: "a" }, { id: "b" }, { id: "c" }], ["c", "a"]);
 * // [{ id: "c" }, { id: "a" }, { id: "b" }]
 */
export function sortByPinned<T extends { id: string }>(categories: T[], pinnedIds: string[]): T[] {
    if (pinnedIds.length === 0) return categories;

    const byId = new Map(categories.map((category) => [category.id, category]));

    /*
     * У сховищі можуть лежати id категорій, яких уже немає в лінії, тому
     * порядок закріплення розкривається через мапу, а не через індекси:
     * зниклі id просто випадають.
     */
    const pinned = pinnedIds.map((id) => byId.get(id)).filter((category) => category !== undefined);
    const pinnedIdSet = new Set(pinnedIds);

    return [...pinned, ...categories.filter((category) => !pinnedIdSet.has(category.id))];
}
