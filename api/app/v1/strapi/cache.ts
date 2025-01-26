import type { StrapiEndpoints, StrapiResponse } from '../../types/strapi.js';
import type { GenericObject } from '../../types/generic.js';

export class StrapiCache {
    // TODO: Implement functional cache
    private cache: GenericObject = {};

    constructor(){
        this.cache = {};
    }

    check = (collection: StrapiEndpoints, id?: string): boolean => {
        if(id) {
            return this.cache[collection] && this.cache[collection][id];
        }
        return !!this.cache[collection];
    };

    set = (collection: StrapiEndpoints, data: StrapiResponse, id?: string): void => {
        if(id) {
            if(!this.cache[collection]) {
                this.cache[collection] = {};
            }
            // this.cache[collection][id] = data;
        } else {
            this.cache[collection] = data;
        }
    };

    delete = (collection: StrapiEndpoints, id?: string): void => {
        if(id) {
            if(this.cache[collection]) {
                delete this.cache[collection][id];
            }
        } else {
            delete this.cache[collection];
        }
    };
}
