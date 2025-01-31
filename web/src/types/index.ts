export interface MenuOptions {
    id: number;
    label: {
        es: string;
        en: string;
        cat: string
    };
    subtitle?: {
        es: string;
        en: string;
        cat: string
    };
    path: string;
}
