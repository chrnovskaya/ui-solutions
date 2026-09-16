import * as Icon from "@/ui/icons";

interface FavoriteActionProps {
    eventLabel: string;
    active: boolean;
    onToggle: () => void;
}

/**
 * Зірка "в обране". Кругла зона тапу --combo-tap-size; relative тримає її
 * над сусідніми позиційованими елементами рамки.
 */
export function FavoriteAction({ eventLabel, active, onToggle }: FavoriteActionProps) {
    return (
        <button
            type="button"
            onClick={onToggle}
            aria-pressed={active}
            aria-label={active ? `Прибрати з обраного: ${eventLabel}` : `Додати в обране: ${eventLabel}`}
            className={`relative flex size-(--combo-tap-size) shrink-0 cursor-pointer items-center justify-center rounded-full ${
                active ? "text-(--combo-accent)" : "text-(--feed-text-muted)"
            }`}
        >
            {active ? <Icon.StarFilled size={20} /> : <Icon.Star size={20} />}
        </button>
    );
}
