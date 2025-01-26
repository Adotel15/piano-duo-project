import { STRAPI_ENDPOINTS } from '../strapi/constants.js';

export const collectionExists = (collection: string): boolean => {
    return STRAPI_ENDPOINTS.includes(collection);
};
