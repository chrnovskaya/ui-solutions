const NAMES = [
    "Bow Echo",
    "Publish",
    "Gewan",
    "Puerto Rico",
    "Albert Einstein",
    "Gstaad",
    "Tornado",
    "Midnight",
    "Silver Storm",
    "Golden Ray",
    "Thunder",
    "Eclipse",
];

/**
 * Генерує масив outcomes із заданою кількістю елементів.
 * Кожен елемент має odds (коефіцієнт) та name (ім'я з масиву NAMES).
 *
 * @param count - кількість outcomes для генерації
 * @returns масив об'єктів { odds: string, name: string }
 *
 * @example
 * generateOutcomes(3);
 * // [
 * //   { odds: "5.00", name: "Bow Echo" },
 * //   { odds: "5.50", name: "Publish" },
 * //   { odds: "6.00", name: "Gewan" },
 * // ]
 */
export function generateOutcomes(count: number) {
    return Array.from({ length: count }, (_, i) => ({
        odds: (5 + i * 0.5).toFixed(2),
        name: NAMES[i % NAMES.length],
    }));
}
