import { useMemo } from "react";
import { useToggleSet } from "@/hooks/useToggleSet";
import { usePinnedCategories } from "./hooks/usePinnedCategories";
import { COMPETITION_CATEGORIES, DEFAULT_EXPANDED_CATEGORY_IDS } from "./lib/mockCompetitions";
import { sortByPinned } from "./lib/sortByPinned";
import { CategoryCard } from "./ui/CategoryCard";
import { CompetitionsScope } from "./ui/CompetitionsScope";

/** Заглушка переходу: прототип живе без роутингу вглиб. */
const NOOP = () => {};

interface CompetitionsProps {
    /**
     * Налаштування оператора з конфігурації віджета
     * (widget setup → Context: Sport Events Feed): чи може користувач
     * закріплювати категорії. Вимкнено — список поводиться так, ніби
     * функції не існує: ні шпильок, ні підняття вгору.
     */
    pinningEnabled?: boolean;
    /** Перехід у лінію турніру. Прототип за замовчуванням нікуди не веде. */
    onOpenCompetition?: (id: string) => void;
}

/**
 * Екран "Football / Competitions": категорії першого рівня — країни, континенти,
 * єврокубки, збірні — розкриваються в список своїх турнірів із лічильником подій.
 *
 * Категорії розкриваються незалежно: закривати сусідню, щоб відкрити потрібну,
 * не доводиться, бо порівнювати лінію двох країн — звичайний сценарій.
 *
 * Закріплюються тільки категорії — турніри всередині лишаються звичайними
 * рядками, бо закріплення міняє порядок першого рівня списку, а не другого.
 *
 * @example
 * <Competitions pinningEnabled onOpenCompetition={(id) => navigate(`/competitions/${id}`)} />
 */
export default function Competitions({ pinningEnabled = true, onOpenCompetition }: CompetitionsProps) {
    const expanded = useToggleSet(DEFAULT_EXPANDED_CATEGORY_IDS);
    const { pinnedIds, isPinned, toggle: togglePinned } = usePinnedCategories();

    const categories = useMemo(
        () => (pinningEnabled ? sortByPinned(COMPETITION_CATEGORIES, pinnedIds) : COMPETITION_CATEGORIES),
        [pinningEnabled, pinnedIds],
    );

    return (
        <CompetitionsScope className="min-h-svh bg-(--cat-bg) px-3 py-3 text-left">
            <div className="mx-auto flex w-full max-w-(--cat-width) flex-col gap-(--cat-gap) xl:max-w-(--cat-width-desktop)">
                {categories.map((category) => (
                    <CategoryCard
                        key={category.id}
                        category={category}
                        expanded={expanded.has(category.id)}
                        onToggle={() => expanded.toggle(category.id)}
                        onOpenCompetition={onOpenCompetition ?? NOOP}
                        pinningEnabled={pinningEnabled}
                        pinned={isPinned(category.id)}
                        onTogglePinned={() => togglePinned(category.id)}
                    />
                ))}
            </div>
        </CompetitionsScope>
    );
}
