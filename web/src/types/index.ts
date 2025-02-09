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

export type AudioPlayerType =  {
    id: number,
    number: string,
    name: string,
    author: string,
    duration: string,
    audio: string
}

export type VideoPlayerType = {
    id: number,
    title: string,
    link: string
}
