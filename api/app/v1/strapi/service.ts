import { FastifyReply, FastifyRequest } from 'fastify';

import { StrapiCache } from './cache';

import { strapiFetch } from '../helpers/strapiFetch';
import { formatStrapiArray, formatStrapiObject } from '../helpers/formatStrapiData';

import type { StrapiArray,StrapiObject, StrapiResponse, StrapiEndpoints } from '../../types/strapi';
import type { GenericObject } from '../../types/generic';

export class StrapiService {
    strapiCache: StrapiCache;

    constructor() {
        this.strapiCache = new StrapiCache();
    }

    getAll = async (collection: StrapiEndpoints, _: FastifyRequest, reply: FastifyReply): Promise<void> => {
        const collectionData = await strapiFetch(collection) as StrapiResponse;
        return reply.code(200).send({ data: formatStrapiArray(collectionData.data as StrapiArray<GenericObject>, collection) });
    };

    getOne = async (collection: StrapiEndpoints, id: string, _: FastifyRequest, reply: FastifyReply): Promise<void> => {
        const collectionData = await strapiFetch(collection, id) as StrapiResponse;
        return reply.code(200).send({ data: formatStrapiObject(collectionData.data as StrapiObject<GenericObject>, collection) });
    };
}

