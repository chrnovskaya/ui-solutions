import { useCallback, useState } from "react";

/**
 * Набір увімкнених id — для обраного та згорнутих турнірів.
 *
 * @param initialIds - id, увімкнені одразу
 *
 * @example
 * const { has, toggle } = useToggleSet();
 * toggle("serie-a");
 * has("serie-a"); // true
 */
export function useToggleSet(initialIds: string[] = []) {
    const [ids, setIds] = useState<Set<string>>(() => new Set(initialIds));

    const toggle = useCallback((id: string) => {
        setIds((prev) => {
            const next = new Set(prev);
            if (!next.delete(id)) next.add(id);
            return next;
        });
    }, []);

    const has = useCallback((id: string) => ids.has(id), [ids]);

    return { has, toggle };
}
