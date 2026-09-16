import * as Icon from "@/ui/icons";
import { formatOdds } from "../lib/comboOdds";

interface AddComboFabProps {
    odds: number | null;
    disabled: boolean;
    /** Комбо вже лежить у купоні — кнопка працює на зняття. */
    added: boolean;
    onClick: () => void;
}

/**
 * Кругла кнопка комбо, врізана в нижній правий кут рамки.
 *
 * Зміщення через translate у частках власного розміру, тож кнопка
 * лишається на куті за будь-якої висоти групи. Виліт за рамку (≈1/3
 * від 44px) вкладається в горизонтальний padding списку.
 */
export function AddComboFab({ odds, disabled, added, onClick }: AddComboFabProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            aria-pressed={added}
            aria-label={added ? `Прибрати комбо ${formatOdds(odds)} з купона` : `Додати комбо ${formatOdds(odds)} в купон`}
            className="absolute right-0 bottom-0 flex size-(--combo-tap-size) translate-x-1/3 translate-y-1/3 cursor-pointer items-center justify-center rounded-full bg-(--combo-accent) text-(--combo-accent-ink) shadow-[0_6px_16px_rgb(0_0_0/0.55)] transition-transform active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
        >
            {added ? <Icon.Check size={22} /> : <Icon.Plus size={22} />}
        </button>
    );
}
