import classNames from "classnames";
import type { ReactNode } from "react";

interface ComboFrameProps {
    children: ReactNode;
    className?: string;
}

/**
 * Рамка навколо групи рядків. Нічого не позиціонує всередині —
 * висота повністю визначається контентом, тому дворядкові назви
 * команд розтягують рамку самі.
 *
 * position: relative — точка відліку для плаваючих елементів варіантів.
 */
export function ComboFrame({ children, className }: ComboFrameProps) {
    return (
        <div
            className={classNames(
                "relative rounded-(--combo-radius) border border-(--combo-accent-line) bg-(--feed-bg) p-1.5",
                className,
            )}
        >
            {children}
        </div>
    );
}
