import type { Team } from "../types";

interface TeamLineProps {
    team: Team;
}

export function TeamLine({ team }: TeamLineProps) {
    return (
        <div className="flex min-w-0 items-center gap-2">
            <span
                className="flex size-5 shrink-0 items-center justify-center rounded-full bg-(--feed-cell-bg) text-[8px] font-semibold"
                style={{ color: team.color }}
                aria-hidden="true"
            >
                {team.monogram}
            </span>
            {/* Назва переноситься на другий рядок — висота рядка й рамки підлаштується сама. */}
            <span className="min-w-0 text-[15px] leading-tight break-words text-(--feed-text)">{team.name}</span>
        </div>
    );
}
