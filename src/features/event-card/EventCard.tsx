import { useId } from "react";
import type { EventCardProps } from "./types";
import { EventCardHeader } from "./ui/EventCardHeader";
import { EventCardInfo } from "./ui/EventCardInfo";
import { FavoriteButton } from "./ui/FavoriteButton";
import { Outcomes } from "./ui/Outcomes";

const EVENT_HREF = "/en/events/2000-guineas-long-term-bets-15158913";

/**
 * Картка події з адаптивним грідом outcomes.
 * Відображає час, назву, іконку та кнопку "обране".
 *
 * Уся площа картки клікабельна завдяки посиланню-оверлею, а не обгортці <a>:
 * кнопка "обране" та outcomes є інтерактивними елементами і не можуть лежати
 * всередині посилання.
 *
 * @param count - кількість outcomes
 * @param desktop - кількість колонок на десктопі
 * @param mobile - кількість колонок на мобільному
 * @param href - посилання на сторінку події
 *
 * @example
 * <EventCard count={9} desktop={3} mobile={2} />
 * <EventCard count={4} desktop={2} mobile={2} />
 */
export default function EventCard({
    count = 6,
    desktop = 3,
    mobile = 2,
    href = EVENT_HREF,
}: EventCardProps = {}) {
    const infoId = useId();

    return (
        <div className="mb-2">
            <div className="relative grid gap-x-2 px-4 py-2 max-xl:px-2 bg-(--card-bg) border-t border-(--border) text-sm leading-[1.3] grid-cols-[minmax(auto,33%)_1fr_auto] grid-rows-[20px_auto] max-xl:grid-cols-[1fr_auto_auto] [grid-template-areas:'header_header_favorite-button'_'event-info_main-markets_favorite-button'] max-xl:[grid-template-areas:'header_header_favorite-button'_'event-info_event-info_favorite-button'_'main-markets_main-markets_main-markets']">
                {/*
                 * Посилання-оверлей. Лежить під контентом, бо інтерактивні блоки
                 * нижче мають position: relative і йдуть за ним у DOM.
                 * Назву для скрінрідера бере з назви події та ринку.
                 */}
                <a
                    className="absolute inset-0"
                    href={href}
                    aria-labelledby={`${infoId}-name ${infoId}-market`}
                />

                <EventCardHeader />
                <EventCardInfo id={infoId} />

                <div className="relative [grid-area:main-markets]">
                    <Outcomes count={count} desktop={{ columns: desktop }} mobile={{ columns: mobile }} />
                </div>

                <FavoriteButton />
            </div>
        </div>
    );
}
