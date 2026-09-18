import { DEFAULT_ICON_SIZE, type IconProps } from "./types";

/**
 * Іконка "шеврон вправо" — маркер переходу вглиб, у список подій турніру.
 *
 * @example
 * <ChevronRight size={16} />
 */
export function ChevronRight({ color = "currentColor", size = DEFAULT_ICON_SIZE }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
            <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill={color} />
        </svg>
    );
}
