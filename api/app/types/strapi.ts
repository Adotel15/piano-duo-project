import { STRAPI_ENDPOINTS } from '../v1/strapi/endpoints';

export type StrapiObject<T> = { id:number, attributes: T }
export type StrapiArray<T> = StrapiObject<T>[]
export type StrapiResponse = {
    data: StrapiArray<Record<string, unknown>> | StrapiObject<Record<string, unknown>>,
    meta: {
        pagination: { page: number, pageSize: number, pageCount: number, total: number }
    }
}

export type StrapiEndpoints = typeof STRAPI_ENDPOINTS[number];

