import * as Icon from "@/ui/icons";
import type { Tournament } from "../types";

interface TournamentHeaderProps {
    tournament: Tournament;
    collapsed: boolean;
    onToggle: () => void;
}

/**
 * Шапка турніру — плаский бар на всю ширину блоку, без заокруглень.
 * Тап згортає та розгортає блок.
 */
export function TournamentHeader({ tournament, collapsed, onToggle }: TournamentHeaderProps) {
    return (
        <button
            type="button"
            onClick={onToggle}
            aria-expanded={!collapsed}
            className="flex min-h-(--combo-tap-size) w-full cursor-pointer items-center gap-2 bg-(--feed-header-bg) px-3 py-2.5 text-left"
        >
            <span className="text-[15px] leading-none" aria-hidden="true">
                {tournament.flag}
            </span>
            <span className="flex-1 text-[13px] text-(--feed-text)">{tournament.title}</span>
            <span
                className={`text-(--feed-text-muted) transition-transform ${collapsed ? "rotate-180" : ""}`}
                aria-hidden="true"
            >
                <Icon.ChevronUp size={18} />
            </span>
        </button>
    );
}
