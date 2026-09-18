import { useCallback, useEffect, useState } from "react";
import { readPinnedIds, writePinnedIds } from "../lib/pinnedStorage";

/**
 * Закріплені користувачем категорії. Стан піднімається зі сховища при
 * першому рендері й пишеться назад після кожної зміни, тому закріплені
 * категорії лишаються вгорі й після повернення на сторінку.
 *
 * Порядок у списку — це порядок закріплення: нова категорія дописується
 * в кінець, і саме в цьому порядку вони потім стоять угорі списку.
 *
 * @example
 * const pinned = usePinnedCategories();
 * pinned.toggle("spain");
 * pinned.isPinned("spain"); // true
 */
export function usePinnedCategories() {
    const [pinnedIds, setPinnedIds] = useState<string[]>(readPinnedIds);

    useEffect(() => {
        writePinnedIds(pinnedIds);
    }, [pinnedIds]);

    const toggle = useCallback((id: string) => {
        setPinnedIds((prev) => (prev.includes(id) ? prev.filter((pinnedId) => pinnedId !== id) : [...prev, id]));
    }, []);

    const isPinned = useCallback((id: string) => pinnedIds.includes(id), [pinnedIds]);

    return { pinnedIds, isPinned, toggle };
}
