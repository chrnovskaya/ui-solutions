import classNames from "classnames";
import type { ReactNode } from "react";
import "../competitions.css";

interface CompetitionsScopeProps {
    children: ReactNode;
    className?: string;
}

/**
 * Обгортка, що вмикає токени списку категорій. Компонент загортає себе сам,
 * тому його можна вставити будь-де без додаткових імпортів стилів.
 */
export function CompetitionsScope({ children, className }: CompetitionsScopeProps) {
    return <div className={classNames("competitions", className)}>{children}</div>;
}
