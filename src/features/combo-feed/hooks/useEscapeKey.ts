import { useEffect } from "react";

/**
 * Викликає onEscape при натисканні Escape, поки enabled === true.
 *
 * @param enabled - чи слухати клавіатуру
 * @param onEscape - обробник
 *
 * @example
 * useEscapeKey(isOpen, close);
 */
export function useEscapeKey(enabled: boolean, onEscape: () => void) {
    useEffect(() => {
        if (!enabled) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onEscape();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [enabled, onEscape]);
}
