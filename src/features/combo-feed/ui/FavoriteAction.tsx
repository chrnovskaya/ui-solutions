import * as Icon from "@/ui/icons";

/**
 * Зірка "в обране" — стандартна дія рядка.
 * Кругла зона тапу --combo-tap-size, relative — щоб у V3 лежати
 * над кнопкою-оверлеєм рамки.
 */
export function FavoriteAction() {
    return (
        <button
            type="button"
            aria-label="Додати подію в обране"
            className="relative flex size-(--combo-tap-size) shrink-0 cursor-pointer items-center justify-center rounded-full text-(--feed-text-muted)"
        >
            <Icon.Star size={20} />
        </button>
    );
}
