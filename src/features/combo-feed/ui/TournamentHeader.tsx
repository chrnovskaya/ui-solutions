import * as Icon from "@/ui/icons";
import type { Tournament } from "../types";

interface TournamentHeaderProps {
    tournament: Tournament;
    collapsed: boolean;
    onToggle: () => void;
}

/**
 * Шапка турніру. Геометрія й типографіка зняті з демо-продукту:
 * висота 32px, велике заокруглення зверху й маленьке знизу, а фон той самий,
 * що й у карток матчів — блок тримається купи зазорами й радіусами, а не
 * різницею кольорів.
 *
 * Бар низький, тому зону тапу добираємо псевдоелементом до --combo-tap-size:
 * він розтягується над і під баром, де лежать тільки зазор між блоками
 * і рядок часу — нічого клікабельного.
 */
export function TournamentHeader({ tournament, collapsed, onToggle }: TournamentHeaderProps) {
    return (
        <button
            type="button"
            onClick={onToggle}
            aria-expanded={!collapsed}
            className="relative flex min-h-8 w-full cursor-pointer items-center gap-1.5 rounded-t-(--feed-radius-lg) rounded-b-(--feed-radius-xs) bg-(--feed-surface) pl-3 text-left after:absolute after:inset-x-0 after:top-1/2 after:h-(--combo-tap-size) after:-translate-y-1/2 after:content-['']"
        >
            <span className="text-[13px] leading-none" aria-hidden="true">
                {tournament.flag}
            </span>

            <span className="flex-1 truncate text-[12px] leading-4 tracking-[0.4px] text-(--feed-text)">
                {tournament.title}
            </span>

            <span
                className={`flex items-center pr-3 text-(--feed-icon-muted) transition-transform ${collapsed ? "rotate-180" : ""}`}
                aria-hidden="true"
            >
                <Icon.ChevronUp size={20} />
            </span>
        </button>
    );
}
