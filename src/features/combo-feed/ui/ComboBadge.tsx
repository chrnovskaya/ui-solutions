import { formatOdds } from "../lib/comboOdds";

interface ComboBadgeProps {
    odds: number | null;
}

/**
 * Бейдж з комбінованим коефіцієнтом, що сидить на верхній межі рамки.
 *
 * Навис угору лише на третину власної висоти, а не на половину: над рамкою
 * відступ коштує місця між шапкою турніру й першим матчем, а вниз бейдж
 * заходить у падінг рамки й порожній верх картки, де тексту немає.
 *
 * Зміщення в частках власного розміру, тож бейдж тримається межі незалежно
 * від висоти групи. pointer-events: none — він суто інформаційний і не
 * перехоплює тапи по рядку під ним.
 */
export function ComboBadge({ odds }: ComboBadgeProps) {
    return (
        <div className="pointer-events-none absolute top-0 left-4 flex -translate-y-1/3 items-center gap-1.5 rounded-full border border-(--combo-accent-line) bg-(--feed-bg) px-2 py-0.5">
            <span className="text-[9px] tracking-[0.5px] text-(--feed-text-muted) uppercase">Combo</span>
            <span className="text-[12px] leading-none font-semibold text-(--combo-accent)">{formatOdds(odds)}</span>
        </div>
    );
}
