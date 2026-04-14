import { useIsDesktop } from "../hooks/useIsDesktop";
import { generateOutcomes } from "../lib/generateOutcomes";
import { getGridSpan } from "../lib/getGridSpan";
import { lcm } from "../lib/math";
import type { OutcomesProps } from "../types";
import { OutcomeItem } from "./OutcomeItem";

const MAX_ITEMS_FOR_WIDE_GAP = 3;

/**
 * Компонент, що рендерить грід outcomes з адаптивною кількістю колонок.
 * Автоматично перемикається між desktop/mobile конфігурацією.
 *
 * @example
 * <Outcomes count={6} desktop={{ columns: 3 }} mobile={{ columns: 2 }} />
 */
export function Outcomes({ count, desktop, mobile }: OutcomesProps) {
    const isDesktop = useIsDesktop();
    const { columns } = isDesktop ? desktop : mobile;
    const items = generateOutcomes(count);
    const useWideGap = count <= MAX_ITEMS_FOR_WIDE_GAP;

    const lastRowCount = count % columns || columns;
    const subCols = lastRowCount === columns ? columns : lcm(columns, lastRowCount);
    const normalSpan = subCols / columns;

    return (
        <div
            className={`grid self-center ${useWideGap ? "gap-2" : "gap-1"}`}
            style={{ gridTemplateColumns: `repeat(${subCols}, 1fr)` }}
        >
            {items.map((item, i) => (
                <OutcomeItem
                    key={i}
                    odds={item.odds}
                    name={item.name}
                    index={i}
                    total={count}
                    columns={columns}
                    span={getGridSpan(i, count, columns) ?? normalSpan}
                />
            ))}
        </div>
    );
}
