import { formatOdds } from "../lib/comboOdds";

interface ComboBadgeProps {
    odds: number | null;
}

/**
 * Бейдж з комбінованим коефіцієнтом. Звисає вниз від верхньої межі рамки,
 * а не навис над нею, тому не з'їдає місця між шапкою турніру й першим
 * матчем. По горизонталі стоїть по центру.
 *
 * pointer-events: none — бейдж суто інформаційний і не перехоплює тапи
 * по рядку під ним.
 */
export function ComboBadge({ odds }: ComboBadgeProps) {
    return (
        <div className="pointer-events-none absolute top-0 left-1/2 flex -translate-x-1/2 items-center rounded-b-xl bg-(--combo-accent) px-4 py-1.5">
            <span className="text-[14px] leading-none font-semibold text-(--combo-accent-ink)">{formatOdds(odds)}</span>
        </div>
    );
}
