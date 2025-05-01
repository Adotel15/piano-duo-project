import { STRAPI_ENDPOINTS } from './constants.js';

import type { GenericObject } from '../types/generic.js';

export type StrapiObject<T> = { id: number, attributes: T }
export type StrapiArray<T> = StrapiObject<T>[]
export type StrapiResponse = {
    data: StrapiArray<GenericObject> | StrapiObject<GenericObject>,
    meta: {
        pagination: { page: number, pageSize: number, pageCount: number, total: number }
    }
}

export type StrapiEndpoints = typeof STRAPI_ENDPOINTS[number];

