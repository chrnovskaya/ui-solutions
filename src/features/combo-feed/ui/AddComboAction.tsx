import * as Icon from "@/ui/icons";
import { formatOdds } from "../lib/comboOdds";

interface AddComboActionProps {
    odds: number | null;
    disabled: boolean;
    onClick: () => void;
}

/**
 * Груповий CTA, що займає слот зірки на останньому рядку групи.
 * Той самий розмір зони тапу, що й у зірки, тому розкладка рядка
 * не змінюється при вмиканні режиму комбо.
 */
export function AddComboAction({ odds, disabled, onClick }: AddComboActionProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            aria-label={`Додати комбо ${formatOdds(odds)} в купон`}
            className="relative flex size-(--combo-tap-size) shrink-0 cursor-pointer flex-col items-center justify-center gap-0.5 rounded-(--combo-cell-radius) border border-(--combo-accent-line) bg-(--combo-accent-soft) text-(--combo-accent) disabled:cursor-not-allowed disabled:opacity-40"
        >
            <Icon.Plus size={16} />
            <span className="text-[10px] leading-none font-semibold">{formatOdds(odds)}</span>
        </button>
    );
}
