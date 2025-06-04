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

export const audioOrder = [
    'Liszt, Reminiscencias de Don Juan',
    'Liszt, Reminiscencias de Norma',
    'Stravinsky Petrouchka',
    'Surinyach, Flamenquerías',
    'Bartók, Sonata 2 pianos & percusión',
    'Falla, Danza de la Vida Breve',
    'Schubert, Sonata en Si bemol mayor',
    'Taverna-Bech, Constelacions',
] as const;

export const repertoireOrder = [
    'Dos pianos',
    'Piano a cuatro manos',
    'Dos pianos y orquesta',
    'Dos pianos y otras formaciones',
] as const;

export const excludedVideoTitle = 'Danzas Eslavas de Dvorak';
export const videoLastOrder = ['Montsalvatge', 'Moises Bertran'] as const;

export const cdOrder = [
    'Els 2 pianos al S XX',
    'Fantasies; Schubert; Rachmaninof etc',
    'Llorenç Balsach',
    'García Morante',
] as const;

