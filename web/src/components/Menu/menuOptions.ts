interface MenuOptions{
    id: number;
    label: string;
    path: string;
}

export const menuOptions: MenuOptions[] = [
    {
        id: 0,
        label: 'Inicio',
        path: '/home',

    },
    {
        id: 1,
        label: 'Reviews',
        path: '/reviews',

    },
    {
        id: 2,
        label: 'Contacto',
        path: '/contact',

    },
    {
        id: 3,
        label: 'Media',
        path: '/media',

    }
];
