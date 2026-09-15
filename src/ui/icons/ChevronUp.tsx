import { DEFAULT_ICON_SIZE, type IconProps } from "./types";

/**
 * Іконка "шеврон вгору" — маркер згорнутого/розгорнутого блоку.
 *
 * @example
 * <ChevronUp size={16} />
 */
export function ChevronUp({ color = "currentColor", size = DEFAULT_ICON_SIZE }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
            <path d="M12 8.29 5.29 15l1.42 1.41L12 11.12l5.29 5.29L18.71 15z" fill={color} />
        </svg>
    );
}
