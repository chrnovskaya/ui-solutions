/** Розмір іконки за замовчуванням, px. */
export const DEFAULT_ICON_SIZE = 24;

export interface IconProps {
    /** Колір заливки. За замовчуванням успадковується від батьківського тексту. */
    color?: string;
    /** Ширина і висота в px. */
    size?: number;
}
