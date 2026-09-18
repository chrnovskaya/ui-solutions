import classNames from "classnames";
import * as Icon from "@/ui/icons";

/** Розмір шпильки. Менший за зону тапу — та добирається порожнім полем. */
const PIN_ICON_SIZE = 18;

interface PinToggleProps {
    pinned: boolean;
    /** Назва категорії — потрапляє в доступну назву кнопки. */
    title: string;
    onToggle: () => void;
}

/**
 * Кнопка закріплення категорії.
 *
 * Стан читається трьома способами одразу: незакріплена шпилька лежить
 * навскіс і намальована контуром у приглушеному сірому, закріплена —
 * стоїть рівно, залита й на повному контрасті. Нахил робить різницю
 * помітною навіть боковим зором, коли пробігаєш очима список.
 *
 * Перехід між станами анімований, але вимикається для тих, хто просив
 * менше руху в системних налаштуваннях.
 */
export function PinToggle({ pinned, title, onToggle }: PinToggleProps) {
    return (
        <button
            type="button"
            onClick={onToggle}
            aria-pressed={pinned}
            aria-label={`${pinned ? "Unpin" : "Pin"} ${title}`}
            className={classNames(
                "flex size-(--cat-pin-hit) shrink-0 cursor-pointer items-center justify-center rounded-full",
                "transition duration-150 ease-out active:scale-90 motion-reduce:transition-none",
                "hover:bg-(--cat-pin-hover-bg)",
                "focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-(--cat-focus-ring)",
                pinned ? "text-(--cat-pin-active)" : "text-(--cat-icon-muted) hover:text-(--cat-text)",
            )}
        >
            <span
                className={classNames(
                    "flex transition-transform duration-200 ease-out motion-reduce:transition-none",
                    pinned ? "rotate-0" : "rotate-45",
                )}
            >
                {pinned ? <Icon.PinFilled size={PIN_ICON_SIZE} /> : <Icon.Pin size={PIN_ICON_SIZE} />}
            </span>
        </button>
    );
}
