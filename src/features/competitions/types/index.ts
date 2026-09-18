/** Турнір усередині категорії: рядок другого рівня списку. */
export interface Competition {
    id: string;
    title: string;
    /** Скільки подій зараз у лінії турніру. */
    eventCount: number;
}

/**
 * Категорія першого рівня: країна, континент, кубковий турнір або збірні.
 * Розкривається в список своїх турнірів.
 */
export interface CompetitionCategory {
    id: string;
    /**
     * Слаг емблеми в таксономії: трилітерний код країни (esp, ita, deu),
     * код турніру (ucl, uel) або "default" для категорій без власної емблеми.
     */
    iconSlug: string;
    title: string;
    competitions: Competition[];
}
