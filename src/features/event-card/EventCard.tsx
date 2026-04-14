import { useSyncExternalStore } from "react";
import "./EventCard.css";
import { Icon } from "@/ui/Icons";

const DESKTOP_BREAKPOINT = 1280;

const mql = `(min-width: ${DESKTOP_BREAKPOINT}px)`;
function subscribe(cb: () => void) {
    const m = window.matchMedia(mql);
    m.addEventListener("change", cb);
    return () => m.removeEventListener("change", cb);
}
function getSnapshot() {
    return window.matchMedia(mql).matches;
}
function useIsDesktop() {
    return useSyncExternalStore(subscribe, getSnapshot);
}

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

function generateOutcomes(count: number) {
    return Array.from({ length: count }, (_, i) => ({
        odds: (5 + i * 0.5).toFixed(2),
        name: NAMES[i % NAMES.length],
    }));
}

function getCornerClass(index: number, total: number, columns: number) {
    const row = Math.floor(index / columns);
    const col = index % columns;
    const totalRows = Math.ceil(total / columns);

    const isFirstRow = row === 0;
    const isLastRow = row === totalRows - 1;
    const isFirstCol = col === 0;
    const isLastCol = col === columns - 1;
    const isLastItem = index === total - 1;

    const classes: string[] = [];
    if (isFirstRow && isFirstCol) classes.push("outcome--tl");
    if (isFirstRow && isLastCol) classes.push("outcome--tr");
    if (isLastRow && isFirstCol) classes.push("outcome--bl");
    if (isLastItem) classes.push("outcome--br");
    return [...new Set(classes)].join(" ");
}

interface GridConfig {
    columns: number;
}

interface OutcomesProps {
    count: number;
    desktop: GridConfig;
    mobile: GridConfig;
}

function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
}
function lcm(a: number, b: number) {
    return (a * b) / gcd(a, b);
}

function getGridSpan(index: number, total: number, columns: number) {
    const lastRowCount = total % columns || columns;
    if (lastRowCount === columns) return undefined;

    const lastRowStart = Math.floor((total - 1) / columns) * columns;
    if (index < lastRowStart) return undefined;

    const subCols = lcm(columns, lastRowCount);
    return subCols / lastRowCount;
}

function Outcomes({ count, desktop, mobile }: OutcomesProps) {
    const isDesktop = useIsDesktop();
    const { columns } = isDesktop ? desktop : mobile;
    const items = generateOutcomes(count);
    const MAX_ITEMS_FOR_WIDE_GAP = 3;
    const useWideGap = count <= MAX_ITEMS_FOR_WIDE_GAP;

    const lastRowCount = count % columns || columns;
    const subCols = lastRowCount === columns ? columns : lcm(columns, lastRowCount);
    const normalSpan = subCols / columns;

    return (
        <div
            className={`event-card__outcomes${useWideGap ? " event-card__outcomes--wide-gap" : ""}`}
            style={{ gridTemplateColumns: `repeat(${subCols}, 1fr)` }}
        >
            {items.map((item, i) => {
                const span = getGridSpan(i, count, columns) ?? normalSpan;
                return (
                    <div
                        className={`outcome ${getCornerClass(i, count, columns)}`}
                        style={{ gridColumn: `span ${span}` }}
                        role="button"
                        tabIndex={0}
                        key={i}
                    >
                        <span className="outcome__odds">{item.odds}</span>
                        <span className="outcome__name">{item.name}</span>
                    </div>
                );
            })}
        </div>
    );
}

interface EventCardProps {
    count: number;
    desktop: number;
    mobile: number;
}

export default function EventCard({ count = 6, desktop = 3, mobile = 2 }: EventCardProps) {
    return (
        <div className="event-card mb-2">
            <a className="event-card__link" href="/en/events/2000-guineas-long-term-bets-15158913">
                <div className="event-card__header">
                    <span className="event-card__time-label">May 2, 15:00</span>
                </div>

                <div className="event-card__info">
                    <div className="event-card__icon">
                        <img
                            src="https://platform.mdlr.tech/assets/images/brand11/mdpi/dark_img_virtual_horse_racing_3d.webp"
                            alt=""
                            width="24"
                            height="24"
                        />
                    </div>
                    <div className="event-card__name-wrapper">
                        <span className="event-card__title">Race 1</span>
                        <span className="event-card__subtitle">Winner</span>
                    </div>
                </div>

                <Outcomes count={count} desktop={{ columns: desktop }} mobile={{ columns: mobile }} />

                <button className="event-card__favorite" type="button">
                    <Icon.Star colour="currentColour" />
                </button>
            </a>
        </div>
    );
}
