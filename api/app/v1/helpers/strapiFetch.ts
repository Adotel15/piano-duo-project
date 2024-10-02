import { STRAPI_URL, STRAPI_TOKEN } from '../constants/env';

import type { StrapiEndpoints } from '../../types/strapi';

export const strapiFetch = async (collection: StrapiEndpoints, id?: string): Promise<unknown> => {
    const path = id ?
        `${STRAPI_URL}/${collection as string}/${id}`
        : `${STRAPI_URL}/${collection as string}`;

    const response = await fetch(path, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${STRAPI_TOKEN}`
        }
    });
    return await response.json();
};
