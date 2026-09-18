import { taxonomyIconUrl } from "../lib/taxonomyIcon";

interface CategoryIconProps {
    slug: string;
    /** Назва категорії — для alt, якщо емблема не завантажилась. */
    title: string;
}

/**
 * Емблема категорії: прапор країни або лого турніру з таксономії демо-продукту.
 *
 * Ширина фіксована, висота вільна — емблеми мають різні пропорції (прапори 7:5,
 * лого турнірів квадратні), і підганяти їх під спільний бокс означало б
 * або різати прапори, або розганяти рядок під найвищу емблему.
 */
export function CategoryIcon({ slug, title }: CategoryIconProps) {
    return (
        <img
            src={taxonomyIconUrl(slug)}
            alt={title}
            className="w-(--cat-icon-width) shrink-0"
            loading="lazy"
            decoding="async"
        />
    );
}
