import type { CompetitionCategory } from "../types";
import { CategoryHeader } from "./CategoryHeader";
import { CompetitionRow } from "./CompetitionRow";

interface CategoryCardProps {
    category: CompetitionCategory;
    expanded: boolean;
    onToggle: () => void;
    onOpenCompetition: (id: string) => void;
    /** Налаштування оператора: чи доступне закріплення категорій. */
    pinningEnabled: boolean;
    pinned: boolean;
    onTogglePinned: () => void;
}

/**
 * Категорія як одна поверхня: згорнута — пігулка в рядок, розгорнута —
 * та сама пігулка, що виросла вниз списком турнірів.
 *
 * Список ховається розмонтуванням, а не висотою: він довгий і різний за
 * розміром, тож анімувати нічого, зате приховані рядки не потрапляють
 * ні у фокус, ні в дерево доступності.
 */
export function CategoryCard({
    category,
    expanded,
    onToggle,
    onOpenCompetition,
    pinningEnabled,
    pinned,
    onTogglePinned,
}: CategoryCardProps) {
    const panelId = `competitions-${category.id}`;

    return (
        <section className="overflow-hidden rounded-(--cat-radius) bg-(--cat-surface)">
            <CategoryHeader
                iconSlug={category.iconSlug}
                title={category.title}
                expanded={expanded}
                panelId={panelId}
                onToggle={onToggle}
                pinningEnabled={pinningEnabled}
                pinned={pinned}
                onTogglePinned={onTogglePinned}
            />

            {expanded && (
                <ul id={panelId} className="border-t border-(--cat-divider) pb-1">
                    {category.competitions.map((competition) => (
                        <CompetitionRow key={competition.id} competition={competition} onOpen={onOpenCompetition} />
                    ))}
                </ul>
            )}
        </section>
    );
}
