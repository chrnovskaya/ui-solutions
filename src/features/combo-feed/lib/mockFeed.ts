import type { ComboFeedData } from "../types";

/**
 * Три сусідні матчі одного турніру — рівно той зріз фіду, який на макеті.
 * Обрані за замовчуванням коефіцієнти дають комбо 1.53 * 1.22 * 1.20 = 2.24.
 */
export const COMBO_FEED_MOCK: ComboFeedData = {
    tournament: { flag: "🇮🇹", title: "Italy. Serie A" },
    events: [
        {
            id: "torino-roma",
            startsAt: "TODAY, 19:30",
            home: { name: "Torino", longName: "Torino Football Club", monogram: "TO", color: "#8c1d1d" },
            away: { name: "Roma", longName: "Associazione Sportiva Roma", monogram: "RM", color: "#c8a04a" },
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
            home: { name: "Como", longName: "Como 1907 Calcio", monogram: "CO", color: "#3b6ea5" },
            away: { name: "Parma", longName: "Parma Calcio 1913", monogram: "PR", color: "#e0c341" },
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
            home: { name: "Inter Milan", longName: "Football Club Internazionale Milano", monogram: "IN", color: "#4a72c8" },
            away: { name: "Udinese", longName: "Udinese Calcio Società Sportiva", monogram: "UD", color: "#b0b3bb" },
            outcomes: [
                { key: "1", odds: 1.2 },
                { key: "X", odds: 6.91 },
                { key: "2", odds: 13.75 },
            ],
            defaultOutcomeKey: "1",
        },
    ],
};
