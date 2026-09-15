import classNames from "classnames";
import type { ReactNode } from "react";
import "../combo-feed.css";

interface ComboFeedScopeProps {
    children: ReactNode;
    className?: string;
}

/**
 * Обгортка, що вмикає токени фіду. Кожен варіант загортає себе сам,
 * тому його можна вставити будь-де без додаткових імпортів стилів.
 */
export function ComboFeedScope({ children, className }: ComboFeedScopeProps) {
    return <div className={classNames("combo-feed", className)}>{children}</div>;
}
