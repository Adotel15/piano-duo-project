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

export const contactInfo = {
    emails: ['lluisgpemo@gmail.com', 'mperez@esmuc.cat'],
    whatsappPhone: '+34 686 16 13 74',
} as const;

export const socialLinks = {
    youtube: 'https://www.youtube.com/@m.lourdesperezmolina8135',
    spotify: 'https://open.spotify.com/artist/0JmG4WmxfxjGTHuBAsLhZe',
} as const;
