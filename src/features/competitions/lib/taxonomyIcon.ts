/** CDN емблем категорій демо-продукту. */
const TAXONOMY_ICON_BASE = "https://demo.gr8.tech/taxonomyicons/categories";

/**
 * Адреса емблеми категорії. Слаг — трилітерний код країни (esp, ita, deu)
 * або код турніру (ucl, uel); для категорій без власної емблеми на CDN
 * лежить "default".
 *
 * @param slug - код категорії в таксономії
 *
 * @example
 * taxonomyIconUrl("esp"); // https://demo.gr8.tech/taxonomyicons/categories/esp
 */
export function taxonomyIconUrl(slug: string) {
    return `${TAXONOMY_ICON_BASE}/${slug}`;
}
