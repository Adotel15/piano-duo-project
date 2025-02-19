// eslint-disable-next-file
import { STRAPI_URL, STRAPI_TOKEN } from '../constants/env.js';

import type { StrapiEndpoints } from '../../types/strapi.js';

export const strapiFetch = async (collection: StrapiEndpoints, language:string, id?: string): Promise<unknown> => {
    const path = id ?
        `${STRAPI_URL}/${collection as string}/${id}?populate=*&locale=${language}`
        : `${STRAPI_URL}/${collection as string}?populate=*&locale=${language}`;

    try {
        const response = await fetch(path, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${STRAPI_TOKEN}`
            }
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};
