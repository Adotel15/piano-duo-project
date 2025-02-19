import { routes } from './routes';

import { MenuOptions } from '../types';

export const menuOptions: MenuOptions[] = [
    {
        id: 0,
        jsonKey: 'biography',
        path: routes.biography,
    },
    {
        id: 1,
        jsonKey: 'reviews',
        path: routes.reviews,
    },
    {
        id: 2,
        jsonKey: 'media',
        subtitleKey: 'audioAndVideo',
        path: routes.media,
    },
    {
        id: 5,
        jsonKey: 'repertoire',
        path: routes.repertoire,
    },
    {
        id: 3,
        jsonKey: 'gallery',
        path: routes.gallery,
    },
    {
        id: 4,
        jsonKey: 'cds',
        path: routes.music,
    },
    {
        id: 6,
        jsonKey: 'contact',
        path: routes.contact,
    },
];

