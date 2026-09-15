interface EventCardInfoProps {
    /** Префікс для id назви події та ринку — на них посилається aria-labelledby картки. */
    id: string;
}

export function EventCardInfo({ id }: EventCardInfoProps) {
    return (
        <div className="[grid-area:event-info] flex items-center gap-2 min-w-0 max-xl:h-14.5">
            <div className="shrink-0">
                <img
                    src="https://platform.mdlr.tech/assets/images/brand11/mdpi/dark_img_virtual_horse_racing_3d.webp"
                    alt=""
                    width="24"
                    height="24"
                />
            </div>
            <div className="flex flex-col text-left min-w-0">
                <span
                    id={`${id}-name`}
                    className="font-semibold text-base leading-5 text-(--text-h) overflow-hidden text-ellipsis break-all line-clamp-1 max-xl:line-clamp-none max-xl:break-normal max-xl:block"
                >
                    Race 1
                </span>
                <span
                    id={`${id}-market`}
                    className="text-sm font-normal leading-4.5 text-(--text) overflow-hidden text-ellipsis break-all line-clamp-1"
                >
                    Winner
                </span>
            </div>
        </div>
    );
}
