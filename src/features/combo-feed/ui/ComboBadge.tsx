import { formatOdds } from "../lib/comboOdds";

interface ComboBadgeProps {
    odds: number | null;
}

/**
 * Бейдж з комбінованим коефіцієнтом, що сидить на верхній межі рамки.
 *
 * Центрується на лінії через translate, а не через фіксований відступ,
 * тому не залежить від висоти групи. pointer-events: none — бейдж суто
 * інформаційний і не перехоплює тапи по рядку під ним.
 */
export function ComboBadge({ odds }: ComboBadgeProps) {
    return (
        <div className="pointer-events-none absolute top-0 left-4 flex -translate-y-1/2 items-center gap-1.5 rounded-full border border-(--combo-accent-line) bg-(--feed-bg) px-2.5 py-1">
            <span className="text-[10px] tracking-[0.5px] text-(--feed-text-muted) uppercase">Combo</span>
            <span className="text-[13px] leading-none font-semibold text-(--combo-accent)">{formatOdds(odds)}</span>
        </div>
    );
}
