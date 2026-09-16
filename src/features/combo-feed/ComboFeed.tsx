import { useMemo } from "react";
import { useBetslip } from "./hooks/useBetslip";
import { useFeedSelection } from "./hooks/useFeedSelection";
import { useToggleSet } from "./hooks/useToggleSet";
import { MIN_COMBO_PICKS, calcComboOdds } from "./lib/comboOdds";
import { FEED_MOCK } from "./lib/mockFeed";
import { collectPicks, samePicks } from "./lib/picks";
import { BetslipBar } from "./ui/BetslipBar";
import { ComboFeedScope } from "./ui/ComboFeedScope";
import { TournamentBlock } from "./ui/TournamentBlock";

/**
 * Фід подій, у якому три сусідні матчі Serie A виділені як група для
 * комбінованої ставки — рамкою навколо наявних рядків, без окремої картки.
 *
 * Усе в фіді живе: коефіцієнти обираються й знімаються, зірки перемикаються,
 * турніри згортаються, комбо кладеться в купон одним тапом і так само
 * знімається.
 *
 * @example
 * <ComboFeed />
 */
export default function ComboFeed() {
    const { blocks, comboEventIds } = FEED_MOCK;

    const allEvents = useMemo(() => blocks.flatMap((block) => block.events), [blocks]);
    const comboEvents = useMemo(
        () => allEvents.filter((event) => comboEventIds.includes(event.id)),
        [allEvents, comboEventIds],
    );

    const { selection, toggle: toggleOutcome } = useFeedSelection(allEvents);
    const favorites = useToggleSet();
    const collapsed = useToggleSet();
    const betslip = useBetslip();

    const comboPicks = collectPicks(comboEvents, selection);
    const comboOdds = comboPicks.length >= MIN_COMBO_PICKS ? calcComboOdds(comboPicks) : null;
    const comboAdded = comboPicks.length > 0 && samePicks(comboPicks, betslip.picks);

    const handleToggleCombo = () => {
        if (comboAdded) {
            betslip.clear();
            return;
        }
        betslip.put(comboPicks);
    };

    return (
        <ComboFeedScope className="min-h-svh bg-(--feed-bg) px-4 pt-3 pb-24 text-left">
            <div className="mx-auto flex w-full max-w-(--phone-width) flex-col gap-3">
                {blocks.map((block) => (
                    <TournamentBlock
                        key={block.tournament.id}
                        block={block}
                        comboEventIds={comboEventIds}
                        selection={selection}
                        onSelect={toggleOutcome}
                        isFavorite={favorites.has}
                        onToggleFavorite={favorites.toggle}
                        collapsed={collapsed.has(block.tournament.id)}
                        onToggleCollapsed={() => collapsed.toggle(block.tournament.id)}
                        comboOdds={comboOdds}
                        comboPicks={comboPicks}
                        comboAdded={comboAdded}
                        onToggleCombo={handleToggleCombo}
                    />
                ))}
            </div>

            <BetslipBar picks={betslip.picks} onClear={betslip.clear} />
        </ComboFeedScope>
    );
}
