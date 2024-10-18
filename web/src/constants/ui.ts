
export interface MenuOptions{
    id: number;
    label: string;
    path: string;
}

export const menuOptions: MenuOptions[] = [
    {
        id: 0,
        label: 'Home',
        path: '/'
    },
    {
        id: 1,
        label: 'Biografía',
        path: '/biography',
    },
    {
        id: 2,
        label: 'Prensa',
        path: '/reviews',
    },
    {
        id: 3,
        label: 'Media',
        path: '/media',
    },
    {
        id: 4,
        label: 'Galería',
        path: '/gallery',
    },
    {
        id: 5,
        label: 'Música',
        path: '/music',
    },
    {
        id: 6,
        label: 'Repertorio',
        path: '/repertoire',
    },
    {
        id: 7,
        label: 'Contacto',
        path: '/contact',
    },
];
