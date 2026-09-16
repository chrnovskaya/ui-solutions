/**
 * Українська форма слова "подія" за числом.
 *
 * @param count - кількість подій
 *
 * @example
 * pluralizeEvents(1); // "подія"
 * pluralizeEvents(3); // "події"
 * pluralizeEvents(5); // "подій"
 */
export function pluralizeEvents(count: number) {
    const lastDigit = count % 10;
    const lastTwoDigits = count % 100;

    if (lastDigit === 1 && lastTwoDigits !== 11) return "подія";
    if (lastDigit >= 2 && lastDigit <= 4 && (lastTwoDigits < 12 || lastTwoDigits > 14)) return "події";
    return "подій";
}
