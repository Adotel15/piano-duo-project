import { STRAPI_ENDPOINTS } from '../strapi/endpoints';

export const collectionExists = (collection: string): boolean => {
    return STRAPI_ENDPOINTS.includes(collection);
};
