import { describe, it, expect } from '@jest/globals';

import { collectionExists } from '../../helpers/collections';

import { STRAPI_ENDPOINTS } from '../../strapi/constants';

describe('collectionExists', () => {
    it('should return true for existing collections', () => {
        for (const collection of STRAPI_ENDPOINTS) {
            expect(collectionExists(collection)).toBe(true);
        }
    });

    it('should return false for non-existing collections', () => {
        expect(collectionExists('non-existing-collection')).toBe(false);
    });
});
