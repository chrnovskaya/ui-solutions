import { DEFAULT_ICON_SIZE, type IconProps } from "./types";

/**
 * Залита зірка — стан "в обраному".
 *
 * @example
 * <StarFilled size={20} color="var(--combo-accent)" />
 */
export function StarFilled({ color = "currentColor", size = DEFAULT_ICON_SIZE }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill={color} />
        </svg>
    );
}
