import { useCallback, useState } from "react";
import type { ComboPick } from "../types";

/**
 * Купон. Комбо кладеться в нього одним паком і таким самим паком знімається.
 *
 * @example
 * const { picks, put, clear } = useBetslip();
 * put(comboPicks);
 */
export function useBetslip() {
    const [picks, setPicks] = useState<ComboPick[]>([]);

    const put = useCallback((next: ComboPick[]) => setPicks(next), []);
    const clear = useCallback(() => setPicks([]), []);

    return { picks, put, clear };
}
