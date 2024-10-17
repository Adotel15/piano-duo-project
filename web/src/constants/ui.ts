
export interface MenuOptions{
    id: number;
    label: string;
    path: string;
}

export const menuOptions: MenuOptions[] = [
    {
        id: 0,
        label: 'Biografía',
        path: '/biography',
    },
    {
        id: 1,
        label: 'Prensa',
        path: '/reviews',
    },
    {
        id: 2,
        label: 'Media',
        path: '/media',
    },
    {
        id: 3,
        label: 'Galería',
        path: '/galery',
    },
    {
        id: 4,
        label: 'Música',
        path: '/music',
    },
    {
        id: 5,
        label: 'Repertorio',
        path: '/repertoire',
    },
    {
        id: 6,
        label: 'Contacto',
        path: '/contact',
    }
];
