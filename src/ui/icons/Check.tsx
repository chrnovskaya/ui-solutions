import { DEFAULT_ICON_SIZE, type IconProps } from "./types";

/**
 * Галочка — підтвердження виконаної дії.
 *
 * @example
 * <Check size={22} />
 */
export function Check({ color = "currentColor", size = DEFAULT_ICON_SIZE }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
            <path
                d="M9.55 17.6 4.4 12.45a1 1 0 0 1 1.42-1.42l3.73 3.74 8.63-8.64a1 1 0 1 1 1.42 1.42z"
                fill={color}
            />
        </svg>
    );
}
