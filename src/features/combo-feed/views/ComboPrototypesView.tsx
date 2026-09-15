import { useCallback, useEffect, useState } from "react";
import EventFeedComboV1 from "../EventFeedComboV1";
import EventFeedComboV2 from "../EventFeedComboV2";
import EventFeedComboV3 from "../EventFeedComboV3";
import { formatOdds } from "../lib/comboOdds";
import type { ComboPick, ComboVariantProps } from "../types";
import { ComboFeedScope } from "../ui/ComboFeedScope";

/** Скільки тримати підтвердження про додавання в купон. */
const TOAST_DURATION_MS = 2400;

const VARIANTS: { id: string; title: string; hint: string; Component: React.FC<ComboVariantProps> }[] = [
    {
        id: "V1",
        title: "Рамка + плаваючий бейдж і кругла «+»",
        hint: "Бейдж сидить на верхній межі, кнопка врізана в нижній правий кут",
        Component: EventFeedComboV1,
    },
    {
        id: "V2",
        title: "CTA замість ★ на останньому рядку",
        hint: "Жодних плаваючих елементів — CTA живе в сітці рядка",
        Component: EventFeedComboV2,
    },
    {
        id: "V3",
        title: "Чиста рамка + bottom sheet",
        hint: "Тап по вільному місцю в рамці відкриває шторку з деталями",
        Component: EventFeedComboV3,
    },
];

/**
 * Сторінка-порівняння трьох прототипів комбо у фіді.
 * Усі варіанти показані один під одним у мобільному фреймі.
 */
export default function ComboPrototypesView() {
    const [longNames, setLongNames] = useState(false);
    const [toast, setToast] = useState<string | null>(null);

    const handleAddToBetslip = useCallback((picks: ComboPick[]) => {
        const combo = picks.reduce((product, pick) => product * pick.odds, 1);
        setToast(`Додано ${picks.length} події в купон · ${formatOdds(combo)}`);
    }, []);

    useEffect(() => {
        if (!toast) return;

        const timer = window.setTimeout(() => setToast(null), TOAST_DURATION_MS);
        return () => window.clearTimeout(timer);
    }, [toast]);

    return (
        <ComboFeedScope className="min-h-svh bg-(--feed-bg) px-4 py-6 text-left">
            <div className="mx-auto flex w-full max-w-(--phone-width) flex-col gap-4">
                <header className="flex flex-col gap-3">
                    <h1>Комбо у фіді — прототипи</h1>
                    <p className="text-[13px] leading-snug text-(--feed-text-muted)">
                        Три сусідні матчі одного турніру виділені як група. Тапніть по коефіцієнту, щоб змінити пік —
                        комбо перерахується.
                    </p>

                    <button
                        type="button"
                        onClick={() => setLongNames((value) => !value)}
                        aria-pressed={longNames}
                        className="flex min-h-(--combo-tap-size) w-fit cursor-pointer items-center gap-2 rounded-full border border-(--feed-border) bg-(--feed-row-bg) px-4 text-[13px] text-(--feed-text)"
                    >
                        <span
                            className={`size-2 rounded-full ${longNames ? "bg-(--combo-accent)" : "bg-(--feed-text-muted)"}`}
                            aria-hidden="true"
                        />
                        Довгі назви команд
                    </button>
                </header>

                <div className="overflow-hidden rounded-3xl border border-(--feed-border)">
                    {VARIANTS.map(({ id, title, hint, Component }) => (
                        <section key={id} className="border-b border-(--feed-border) last:border-b-0">
                            <div className="flex flex-col gap-0.5 bg-(--feed-header-bg) px-4 py-3">
                                <p className="text-[13px] font-semibold text-(--combo-accent)">
                                    {id} — {title}
                                </p>
                                <p className="text-[11px] leading-snug text-(--feed-text-muted)">{hint}</p>
                            </div>
                            <Component onAddToBetslip={handleAddToBetslip} longNames={longNames} />
                        </section>
                    ))}
                </div>
            </div>

            {toast && (
                <div
                    role="status"
                    className="fixed inset-x-0 bottom-5 z-60 mx-auto w-fit max-w-(--phone-width) rounded-full bg-(--combo-accent) px-4 py-2.5 text-[13px] font-medium text-(--combo-accent-ink)"
                >
                    {toast}
                </div>
            )}
        </ComboFeedScope>
    );
}
