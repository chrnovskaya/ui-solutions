import { DEFAULT_ICON_SIZE, type IconProps } from "./types";

/**
 * Іконка "плюс" зі скругленими кінцями.
 *
 * @example
 * <Plus size={20} />
 */
export function Plus({ color = "currentColor", size = DEFAULT_ICON_SIZE }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
            <path
                d="M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1Z"
                fill={color}
            />
        </svg>
    );
}
