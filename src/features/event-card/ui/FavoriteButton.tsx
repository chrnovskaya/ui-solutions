import * as Icon from "@/ui/icons";

export function FavoriteButton() {
    return (
        <button
            className="relative [grid-area:favorite-button] self-center bg-transparent border-none cursor-pointer text-(--text) p-0"
            type="button"
            aria-label="Add to favourites"
        >
            <Icon.Star />
        </button>
    );
}
