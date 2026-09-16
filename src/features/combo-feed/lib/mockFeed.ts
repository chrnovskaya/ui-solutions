import type { FeedData } from "../types";

/**
 * Зріз фіду на кілька турнірів — щоб комбо-групу було видно в контексті
 * звичайного списку, а не окремо. Коефіцієнти взяті з реального екрана.
 */
export const FEED_MOCK: FeedData = {
    comboEventIds: ["torino-roma", "como-parma", "inter-udinese"],
    blocks: [
        {
            tournament: { id: "laliga", flag: "🇪🇸", title: "Spain. LaLiga" },
            events: [
                {
                    id: "villarreal-betis",
                    startsAt: "TODAY, 22:00",
                    home: { name: "Villarreal", monogram: "VI", color: "#f5d547" },
                    away: { name: "Betis", monogram: "BE", color: "#2eb872" },
                    outcomes: [
                        { key: "1", odds: 1.97 },
                        { key: "X", odds: 3.85 },
                        { key: "2", odds: 3.49 },
                    ],
                    defaultOutcomeKey: null,
                },
            ],
        },
        {
            tournament: { id: "premier-league", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", title: "England. Premier League" },
            events: [
                {
                    id: "leeds-newcastle",
                    startsAt: "TODAY, 22:00",
                    home: { name: "Leeds", monogram: "LE", color: "#dfe3ea" },
                    away: { name: "Newcastle", monogram: "NE", color: "#9aa0ab" },
                    outcomes: [
                        { key: "1", odds: 2.26 },
                        { key: "X", odds: 3.55 },
                        { key: "2", odds: 3.05 },
                    ],
                    defaultOutcomeKey: null,
                },
            ],
        },
        {
            tournament: { id: "serie-a", flag: "🇮🇹", title: "Italy. Serie A" },
            events: [
                {
                    id: "torino-roma",
                    startsAt: "TODAY, 19:30",
                    home: { name: "Torino", monogram: "TO", color: "#b5323a" },
                    away: { name: "Roma", monogram: "RM", color: "#c8a04a" },
                    outcomes: [
                        { key: "1", odds: 6.04 },
                        { key: "X", odds: 4.31 },
                        { key: "2", odds: 1.53 },
                    ],
                    defaultOutcomeKey: "2",
                },
                {
                    id: "como-parma",
                    startsAt: "TODAY, 19:30",
                    home: { name: "Como", monogram: "CO", color: "#3b6ea5" },
                    away: { name: "Parma", monogram: "PR", color: "#e0c341" },
                    outcomes: [
                        { key: "1", odds: 1.22 },
                        { key: "X", odds: 6.45 },
                        { key: "2", odds: 12.73 },
                    ],
                    defaultOutcomeKey: "1",
                },
                {
                    id: "inter-udinese",
                    startsAt: "TODAY, 21:45",
                    home: { name: "Inter Milan", monogram: "IN", color: "#4a72c8" },
                    away: { name: "Udinese", monogram: "UD", color: "#b0b3bb" },
                    outcomes: [
                        { key: "1", odds: 1.2 },
                        { key: "X", odds: 6.91 },
                        { key: "2", odds: 13.75 },
                    ],
                    defaultOutcomeKey: "1",
                },
                {
                    id: "lazio-napoli",
                    startsAt: "TOMORROW, 19:00",
                    home: { name: "Lazio", monogram: "LZ", color: "#8ec9e8" },
                    away: { name: "Napoli", monogram: "NA", color: "#3aa0d8" },
                    outcomes: [
                        { key: "1", odds: 3.4 },
                        { key: "X", odds: 3.3 },
                        { key: "2", odds: 2.2 },
                    ],
                    defaultOutcomeKey: null,
                },
                {
                    id: "atalanta-genoa",
                    startsAt: "TOMORROW, 21:45",
                    home: { name: "Atalanta", monogram: "AT", color: "#7f8894" },
                    away: { name: "Genoa", monogram: "GE", color: "#b5323a" },
                    outcomes: [
                        { key: "1", odds: 1.44 },
                        { key: "X", odds: 4.9 },
                        { key: "2", odds: 7.2 },
                    ],
                    defaultOutcomeKey: null,
                },
            ],
        },
        {
            tournament: { id: "ukraine-premier", flag: "🇺🇦", title: "Ukraine. Premier League" },
            events: [
                {
                    id: "shakhtar-chornomorets",
                    startsAt: "TODAY, 18:00",
                    home: { name: "Shakhtar Donetsk", monogram: "SH", color: "#f58220" },
                    away: { name: "Chornomorets Odesa", monogram: "CH", color: "#2f6fb5" },
                    outcomes: [
                        { key: "1", odds: 1.14 },
                        { key: "X", odds: 8.36 },
                        { key: "2", odds: 18.72 },
                    ],
                    defaultOutcomeKey: null,
                },
            ],
        },
        {
            tournament: { id: "brazil-serie-a", flag: "🇧🇷", title: "Brazil. Serie A" },
            events: [
                {
                    id: "flamengo-palmeiras",
                    startsAt: "TOMORROW, 02:00",
                    home: { name: "Flamengo", monogram: "FL", color: "#c8102e" },
                    away: { name: "Palmeiras", monogram: "PA", color: "#1b7a4b" },
                    outcomes: [
                        { key: "1", odds: 2.1 },
                        { key: "X", odds: 3.2 },
                        { key: "2", odds: 3.45 },
                    ],
                    defaultOutcomeKey: null,
                },
            ],
        },
    ],
};
