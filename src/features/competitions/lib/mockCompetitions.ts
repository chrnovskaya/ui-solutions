import type { CompetitionCategory } from "../types";

/**
 * Зріз розділу "Football / Competitions" демо-продукту.
 *
 * Категорії йдуть у тому ж порядку, що й на живому екрані (за популярністю,
 * а не за абеткою), склад і лічильники Іспанії зняті з нього один в один.
 *
 * Слаги емблем — з таксономії демо-продукту. Для South America свого коду
 * на CDN немає (CONMEBOL не віддається), тому стоїть глобус "world".
 * Решта категорій — правдоподібна лінія з реальними назвами турнірів:
 * прототип показує поведінку списку, а не тягне живі дані.
 */
export const COMPETITION_CATEGORIES: CompetitionCategory[] = [
    {
        id: "spain",
        iconSlug: "esp",
        title: "Spain",
        competitions: [
            { id: "spain-laliga", title: "LaLiga", eventCount: 16 },
            { id: "spain-segunda", title: "Segunda Division", eventCount: 11 },
            { id: "spain-laliga-outrights", title: "LaLiga. Outrights", eventCount: 1 },
            { id: "spain-primera-federacion", title: "Primera Federacion", eventCount: 19 },
            { id: "spain-copa-federacion", title: "Copa Federacion", eventCount: 8 },
            { id: "spain-segunda-federacion", title: "Segunda Federacion", eventCount: 39 },
            { id: "spain-segunda-outrights", title: "Segunda Division. Outrights", eventCount: 1 },
            { id: "spain-copa-del-rey-outrights", title: "Copa del Rey. Outrights", eventCount: 1 },
        ],
    },
    {
        id: "south-america",
        iconSlug: "world",
        title: "South America",
        competitions: [
            { id: "conmebol-libertadores", title: "Copa Libertadores", eventCount: 8 },
            { id: "conmebol-sudamericana", title: "Copa Sudamericana", eventCount: 8 },
            { id: "conmebol-libertadores-outrights", title: "Copa Libertadores. Outrights", eventCount: 1 },
            { id: "conmebol-recopa", title: "Recopa Sudamericana", eventCount: 2 },
        ],
    },
    {
        id: "uefa-europa-league",
        iconSlug: "uel",
        title: "UEFA Europa League",
        competitions: [
            { id: "uel-main", title: "UEFA Europa League", eventCount: 18 },
            { id: "uel-outrights", title: "UEFA Europa League. Outrights", eventCount: 1 },
        ],
    },
    {
        id: "italy",
        iconSlug: "ita",
        title: "Italy",
        competitions: [
            { id: "italy-serie-a", title: "Serie A", eventCount: 10 },
            { id: "italy-serie-b", title: "Serie B", eventCount: 10 },
            { id: "italy-serie-c", title: "Serie C", eventCount: 28 },
            { id: "italy-coppa-italia", title: "Coppa Italia", eventCount: 4 },
            { id: "italy-serie-a-outrights", title: "Serie A. Outrights", eventCount: 1 },
        ],
    },
    {
        id: "france",
        iconSlug: "fra",
        title: "France",
        competitions: [
            { id: "france-ligue-1", title: "Ligue 1", eventCount: 9 },
            { id: "france-ligue-2", title: "Ligue 2", eventCount: 9 },
            { id: "france-national", title: "National", eventCount: 9 },
            { id: "france-coupe-de-france", title: "Coupe de France", eventCount: 16 },
            { id: "france-ligue-1-outrights", title: "Ligue 1. Outrights", eventCount: 1 },
        ],
    },
    {
        id: "germany",
        iconSlug: "deu",
        title: "Germany",
        competitions: [
            { id: "germany-bundesliga", title: "Bundesliga", eventCount: 9 },
            { id: "germany-2-bundesliga", title: "2. Bundesliga", eventCount: 9 },
            { id: "germany-3-liga", title: "3. Liga", eventCount: 10 },
            { id: "germany-dfb-pokal", title: "DFB Pokal", eventCount: 8 },
            { id: "germany-bundesliga-outrights", title: "Bundesliga. Outrights", eventCount: 1 },
        ],
    },
    {
        id: "brazil",
        iconSlug: "bra",
        title: "Brazil",
        competitions: [
            { id: "brazil-serie-a", title: "Serie A", eventCount: 10 },
            { id: "brazil-serie-b", title: "Serie B", eventCount: 10 },
            { id: "brazil-serie-c", title: "Serie C", eventCount: 10 },
            { id: "brazil-copa-do-brasil", title: "Copa do Brasil", eventCount: 8 },
            { id: "brazil-serie-a-outrights", title: "Serie A. Outrights", eventCount: 1 },
        ],
    },
    {
        id: "uefa-champions-league",
        iconSlug: "ucl",
        title: "UEFA Champions League",
        competitions: [
            { id: "ucl-main", title: "UEFA Champions League", eventCount: 18 },
            { id: "ucl-outrights", title: "UEFA Champions League. Outrights", eventCount: 1 },
        ],
    },
    {
        id: "national-teams",
        iconSlug: "world",
        title: "National teams",
        competitions: [
            { id: "nt-wc-qual-europe", title: "World Cup Qualification. Europe", eventCount: 24 },
            { id: "nt-wc-qual-south-america", title: "World Cup Qualification. South America", eventCount: 5 },
            { id: "nt-friendlies", title: "International Friendlies", eventCount: 12 },
            { id: "nt-wc-outrights", title: "World Cup. Outrights", eventCount: 1 },
        ],
    },
    {
        id: "england",
        iconSlug: "eng",
        title: "England",
        competitions: [
            { id: "england-premier-league", title: "Premier League", eventCount: 10 },
            { id: "england-championship", title: "Championship", eventCount: 12 },
            { id: "england-league-one", title: "League One", eventCount: 12 },
            { id: "england-fa-cup", title: "FA Cup", eventCount: 16 },
            { id: "england-premier-league-outrights", title: "Premier League. Outrights", eventCount: 1 },
        ],
    },
    {
        id: "portugal",
        iconSlug: "prt",
        title: "Portugal",
        competitions: [
            { id: "portugal-primeira-liga", title: "Primeira Liga", eventCount: 9 },
            { id: "portugal-liga-portugal-2", title: "Liga Portugal 2", eventCount: 9 },
            { id: "portugal-taca-de-portugal", title: "Taca de Portugal", eventCount: 8 },
        ],
    },
    {
        id: "netherlands",
        iconSlug: "nld",
        title: "Netherlands",
        competitions: [
            { id: "netherlands-eredivisie", title: "Eredivisie", eventCount: 9 },
            { id: "netherlands-eerste-divisie", title: "Eerste Divisie", eventCount: 10 },
            { id: "netherlands-knvb-beker", title: "KNVB Beker", eventCount: 8 },
        ],
    },
    {
        id: "argentina",
        iconSlug: "arg",
        title: "Argentina",
        competitions: [
            { id: "argentina-liga-profesional", title: "Liga Profesional", eventCount: 14 },
            { id: "argentina-primera-nacional", title: "Primera Nacional", eventCount: 18 },
            { id: "argentina-copa-argentina", title: "Copa Argentina", eventCount: 4 },
        ],
    },
];

/** Категорії, розкриті одразу при відкритті екрана. */
export const DEFAULT_EXPANDED_CATEGORY_IDS = ["spain"];
