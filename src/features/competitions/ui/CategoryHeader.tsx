import * as Icon from "@/ui/icons";
import { CategoryIcon } from "./CategoryIcon";
import { PinToggle } from "./PinToggle";

interface CategoryHeaderProps {
    iconSlug: string;
    title: string;
    expanded: boolean;
    /** id списку турнірів — щоб скрінрідер знав, чим керує кнопка. */
    panelId: string;
    onToggle: () => void;
    /** Налаштування оператора: чи показувати кнопку закріплення. */
    pinningEnabled: boolean;
    pinned: boolean;
    onTogglePinned: () => void;
}

/**
 * Шапка категорії. Коли категорія згорнута — це самостійна пігулка,
 * коли розгорнута — верхній рядок картки з розділювачем під ним.
 *
 * Назва набрана жирним на повному контрасті, на відміну від турнірів усередині:
 * так рівні списку читаються без відступів і ліній.
 *
 * Шеврон — окремий клікабельний елемент, а не частина кнопки: між назвою і ним
 * стоїть шпилька, і вкласти одну кнопку в іншу не можна. Для клавіатури й
 * скрінрідера він дубль, тому прихований — розгортанням керує кнопка з назвою.
 */
export function CategoryHeader({
    iconSlug,
    title,
    expanded,
    panelId,
    onToggle,
    pinningEnabled,
    pinned,
    onTogglePinned,
}: CategoryHeaderProps) {
    return (
        <div className="flex h-(--cat-row-h) items-center gap-2 px-(--cat-pad-inline)">
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={expanded}
                aria-controls={panelId}
                className="flex min-w-0 flex-1 cursor-pointer items-center gap-2 text-left"
            >
                <CategoryIcon slug={iconSlug} title={title} />
                <h2 className="truncate">{title}</h2>
            </button>

            {pinningEnabled && <PinToggle pinned={pinned} title={title} onToggle={onTogglePinned} />}

            <span
                onClick={onToggle}
                aria-hidden="true"
                className={`flex shrink-0 cursor-pointer items-center text-(--cat-icon-muted) transition-transform ${expanded ? "" : "rotate-180"}`}
            >
                <Icon.ChevronUp size={24} />
            </span>
        </div>
    );
}
