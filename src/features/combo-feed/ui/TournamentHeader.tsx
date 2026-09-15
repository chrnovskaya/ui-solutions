import * as Icon from "@/ui/icons";
import type { Tournament } from "../types";

interface TournamentHeaderProps {
    tournament: Tournament;
}

export function TournamentHeader({ tournament }: TournamentHeaderProps) {
    return (
        <div className="flex items-center gap-2 rounded-(--combo-row-radius) bg-(--feed-header-bg) px-3 py-2.5">
            <span aria-hidden="true">{tournament.flag}</span>
            <span className="flex-1 text-[13px] text-(--feed-text)">{tournament.title}</span>
            <span className="text-(--feed-text-muted)" aria-hidden="true">
                <Icon.ChevronUp size={18} />
            </span>
        </div>
    );
}
