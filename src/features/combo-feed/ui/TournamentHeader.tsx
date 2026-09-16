import * as Icon from "@/ui/icons";
import type { Tournament } from "../types";

interface TournamentHeaderProps {
    tournament: Tournament;
    collapsed: boolean;
    onToggle: () => void;
}

/**
 * Шапка турніру — компактний плаский бар на всю ширину блоку.
 *
 * Сам бар низький, як у макеті, тому зону тапу добираємо псевдоелементом
 * до --combo-tap-size: він розтягується по 6px над і під баром, де лежать
 * тільки міжблочний зазор і рядок часу — нічого клікабельного.
 */
export function TournamentHeader({ tournament, collapsed, onToggle }: TournamentHeaderProps) {
    return (
        <button
            type="button"
            onClick={onToggle}
            aria-expanded={!collapsed}
            className="relative flex w-full cursor-pointer items-center gap-2 bg-(--feed-header-bg) px-3 py-2 text-left after:absolute after:inset-x-0 after:top-1/2 after:h-(--combo-tap-size) after:-translate-y-1/2 after:content-['']"
        >
            <span className="text-[13px] leading-none" aria-hidden="true">
                {tournament.flag}
            </span>
            <span className="flex-1 text-[12px] leading-none font-semibold text-(--feed-text-strong)">
                {tournament.title}
            </span>
            <span
                className={`text-(--feed-text-muted) transition-transform ${collapsed ? "rotate-180" : ""}`}
                aria-hidden="true"
            >
                <Icon.ChevronUp size={16} />
            </span>
        </button>
    );
}
