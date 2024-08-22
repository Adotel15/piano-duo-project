import { FastifyReply, FastifyRequest } from 'fastify';

import { strapiFetch } from '../helpers/strapiFetch';
import { formatStrapiArray, formatStrapiObject } from '../helpers/formatStrapiData';

import type { StrapiEndpoints } from '../../types/strapi';

import type { StrapiArray,StrapiObject, StrapiResponse } from '../../types/strapi';

export class StrapiService {
    async getAll(collection: StrapiEndpoints, request: FastifyRequest, reply: FastifyReply): Promise<void> {
        const collectionData = await strapiFetch(collection) as StrapiResponse;
        return reply.code(200).send({ data: formatStrapiArray(collectionData.data as StrapiArray<Record<string, unknown>>) });
    }

    async getOne(collection: StrapiEndpoints, id: string, request: FastifyRequest, reply: FastifyReply): Promise<void> {
        const collectionData = await strapiFetch(collection, id) as StrapiResponse;
        return reply.code(200).send({ data: formatStrapiObject(collectionData.data as StrapiObject<Record<string, unknown>>) });
    }
}

