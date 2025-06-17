export interface MenuOptions {
    id: number;
    jsonKey: string;
    subtitleKey?: string;
    path: string;
}

export type AudioPlayerType =  {
    id: number,
    number: string,
    name: string,
    author: string,
    duration: string,
    link: string
    orderNumber: string,
}

export type VideoPlayerType = {
    id: number,
    title: string,
    link: string
}
