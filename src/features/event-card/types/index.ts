export interface GridConfig {
    columns: number;
}

export interface OutcomesProps {
    count: number;
    desktop: GridConfig;
    mobile: GridConfig;
}

export interface EventCardProps {
    count: number;
    desktop: number;
    mobile: number;
}
