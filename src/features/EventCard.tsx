import { useSyncExternalStore } from "react";
import "./EventCard.css";

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
  const subCols =
    lastRowCount === columns ? columns : lcm(columns, lastRowCount);
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

export default function EventCard() {
  return (
    <div className="event-card">
      <a
        className="event-card__link"
        href="/en/events/2000-guineas-long-term-bets-15158913"
      >
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

        <Outcomes count={9} desktop={{ columns: 3 }} mobile={{ columns: 2 }} />

        <button className="event-card__favorite" type="button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M11.9999 4.93L14.0199 9.34L18.6999 9.88L15.1899 13.07L16.1199 17.79L11.9899 15.42L7.8599 17.79L8.7899 13.07L5.2799 9.88L9.9599 9.34L11.9999 4.93ZM11.9999 2C11.5199 2 11.0499 2.2 10.8099 2.71C10.2699 3.9 8.6299 7.48 8.6299 7.48C8.6299 7.48 4.8299 7.91 3.5599 8.06C2.8399 8.14 2.3999 8.75 2.3999 9.37C2.3999 9.71 2.5299 10.06 2.8299 10.33C3.7799 11.19 6.6199 13.78 6.6199 13.78L5.6199 18.88C5.4599 19.68 5.8499 20.5 6.7999 20.5C7.0099 20.5 7.3399 20.4 7.5499 20.27C8.6599 19.63 11.9999 17.71 11.9999 17.71C11.9999 17.71 15.3399 19.63 16.4499 20.27C16.6599 20.39 16.9899 20.5 17.1999 20.5C18.1399 20.5 18.5299 19.66 18.3799 18.88C17.9299 16.61 17.3799 13.78 17.3799 13.78C17.3799 13.78 20.2199 11.19 21.1699 10.33C21.4699 10.06 21.5999 9.71 21.5999 9.37C21.5999 8.75 21.1599 8.14 20.4399 8.06C19.1699 7.92 15.3699 7.48 15.3699 7.48C15.3699 7.48 14.1599 4.83 13.1899 2.71C12.9599 2.2 12.4799 2 11.9999 2Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </a>
    </div>
  );
}
