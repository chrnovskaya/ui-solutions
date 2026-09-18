/** Ключ, під яким лежать закріплені категорії користувача. */
const PINNED_STORAGE_KEY = "ui-solutions:competitions:pinned";

/**
 * Читає закріплені категорії зі сховища.
 *
 * Сховище може бути недоступним (приватний режим, заблоковані cookies) або
 * містити чужі дані під тим самим ключем, тому результат фільтрується, а
 * будь-яка помилка означає "закріплених немає".
 */
export function readPinnedIds(): string[] {
    try {
        const raw = localStorage.getItem(PINNED_STORAGE_KEY);
        if (!raw) return [];

        const parsed: unknown = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];

        return parsed.filter((id): id is string => typeof id === "string");
    } catch {
        return [];
    }
}

/**
 * Зберігає закріплені категорії. Якщо сховище недоступне — закріплення
 * лишаються робочими в межах сесії, просто не переживуть перезавантаження.
 */
export function writePinnedIds(ids: string[]) {
    try {
        localStorage.setItem(PINNED_STORAGE_KEY, JSON.stringify(ids));
    } catch {
        // Сховище недоступне або переповнене — мовчки лишаємось у памʼяті.
    }
}
