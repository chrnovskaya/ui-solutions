import classNames from "classnames";
import { getCornerClass } from "../lib/getCornerClass";

interface OutcomeItemProps {
    odds: string;
    name: string;
    index: number;
    total: number;
    columns: number;
    span: number;
}

export function OutcomeItem({ odds, name, index, total, columns, span }: OutcomeItemProps) {
    return (
        <div
            className={classNames(
                "flex flex-col justify-center items-center min-h-12 px-2",
                "py-1 rounded bg-(--outcome-bg) cursor-pointer min-w-0",
                getCornerClass(index, total, columns),
            )}
            style={{ gridColumn: `span ${span}` }}
            role="button"
            tabIndex={0}
        >
            <span className="font-medium text-base leading-5 text-(--outcome-odds)">{odds}</span>
            <span className="text-[10px] uppercase text-(--text) whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                {name}
            </span>
        </div>
    );
}
