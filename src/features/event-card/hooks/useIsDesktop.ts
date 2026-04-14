import { useSyncExternalStore } from "react";

const DESKTOP_BREAKPOINT = 1280;

const mql = `(min-width: ${DESKTOP_BREAKPOINT}px)`;

/**
 * Підписується на зміну медіа-запиту (desktop breakpoint).
 * Повертає функцію відписки.
 *
 * @example
 * const unsubscribe = subscribe(() => console.log("breakpoint changed"));
 * unsubscribe();
 */
function subscribe(cb: () => void) {
    const m = window.matchMedia(mql);
    m.addEventListener("change", cb);
    return () => m.removeEventListener("change", cb);
}

/**
 * Повертає поточний стан медіа-запиту: true якщо ширина >= DESKTOP_BREAKPOINT.
 *
 * @example
 * getSnapshot(); // true на десктопі, false на мобільному
 */
function getSnapshot() {
    return window.matchMedia(mql).matches;
}

/**
 * React-хук, який реактивно повертає true/false залежно від ширини екрану.
 * Використовує useSyncExternalStore для підписки на зміну breakpoint.
 *
 * @example
 * const isDesktop = useIsDesktop();
 * // isDesktop === true при ширині >= 1280px
 */
export function useIsDesktop() {
    return useSyncExternalStore(subscribe, getSnapshot);
}
