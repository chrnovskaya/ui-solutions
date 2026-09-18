import * as Icon from "@/ui/icons";
import type { Competition } from "../types";

interface CompetitionRowProps {
    competition: Competition;
    onOpen: (id: string) => void;
}

/**
 * Рядок турніру. Назва вирівняна по плитці прапора, а не по тексту категорії:
 * так список турнірів читається як продовження картки, а не як вкладений блок.
 *
 * Лічильник подій лежить усередині кнопки звичайним текстом, тому потрапляє
 * в її доступну назву і озвучується скрінрідером разом із назвою турніру.
 */
export function CompetitionRow({ competition, onOpen }: CompetitionRowProps) {
    const { id, title, eventCount } = competition;

    return (
        <li>
            <button
                type="button"
                onClick={() => onOpen(id)}
                className="flex h-(--cat-item-row-h) w-full cursor-pointer items-center gap-2 px-(--cat-pad-inline) text-left"
            >
                <span className="flex-1 truncate text-[13px] leading-4 text-(--cat-text-muted)">{title}</span>

                <span className="shrink-0 text-[13px] leading-4 text-(--cat-count)">{eventCount}</span>

                <span className="flex shrink-0 items-center text-(--cat-icon-muted)" aria-hidden="true">
                    <Icon.ChevronRight size={16} />
                </span>
            </button>
        </li>
    );
}
