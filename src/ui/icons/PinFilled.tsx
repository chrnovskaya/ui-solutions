import { DEFAULT_ICON_SIZE, type IconProps } from "./types";

/**
 * Іконка "шпилька", залита — елемент закріплений.
 *
 * @example
 * <PinFilled size={20} />
 */
export function PinFilled({ color = "currentColor", size = DEFAULT_ICON_SIZE }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
            <path
                d="M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z"
                fill={color}
            />
        </svg>
    );
}
