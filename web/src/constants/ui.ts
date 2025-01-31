import { routes } from './routes';

import { MenuOptions } from '../types';

export const menuOptions: MenuOptions[] = [
    {
        id: 0,
        label: {
            es: 'Biografía',
            en: 'Biography',
            cat: 'Biografia'
        },
        path: routes.biography,
    },
    {
        id: 1,
        label: {
            es:'Prensa',
            en: 'Press',
            cat: 'Premsa'
        },
        path: routes.reviews,
    },
    {
        id: 2,
        label: {
            es: 'Media',
            en: 'Media',
            cat: 'Mitjans'
        },
        subtitle: {
            es: 'audios y videos',
            en: 'audios and videos',
            cat: 'audios i videos'
        },
        path: routes.media,
    },
    {
        id: 5,
        label: {
            es: 'Repertorio',
            en: 'Repertoire',
            cat: 'Repertori'
        },
        path: routes.repertoire,
    },
    {
        id: 3,
        label: {
            es: 'Galería',
            en: 'Gallery',
            cat: 'Galeria'
        },
        path: routes.gallery,
    },
    {
        id: 4,
        label:{
            es:'CDS',
            en: 'CDS',
            cat: 'CD\'S'
        },
        path: routes.music,
    },
    {
        id: 6,
        label: {
            es: 'Contacto',
            en: 'Contact',
            cat: 'Contacte'
        },
        path: routes.contact,
    },
];

