import { STRAPI_ENDPOINTS } from '../constants.js';

export const collectionExists = (collection: string): boolean => {
    return STRAPI_ENDPOINTS.includes(collection as typeof STRAPI_ENDPOINTS[number]);
};
