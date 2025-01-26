import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

import { StrapiService } from './service.js';
import { collectionExists } from '../helpers/collections.js';

import { StrapiEndpoints } from '../../types/strapi.js';

export class StrapiRoutes {
    strapiService: StrapiService;

    constructor() {
        this.strapiService = new StrapiService();
    }

    routes = (app: FastifyInstance, _: Record<string, unknown>, done: () => void) => {
        app.route({
            method: 'GET',
            url: '/:collection',
            handler: async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
                const { collection } = request.params as { collection: StrapiEndpoints };

                if(!collectionExists(collection)) {
                    return reply.status(400).send({ error: 'Collection not found.' });
                }

                return await this.strapiService.getAll(collection, request, reply);
            }
        });

        app.route({
            method: 'GET',
            url: '/:collection/:id',
            handler: async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
                const { collection, id } = request.params as { collection: StrapiEndpoints; id: string };

                if(!collectionExists(collection)) {
                    return reply.status(400).send({ error: 'Collection not found.' });
                }

                return await this.strapiService.getOne(collection, id, request, reply);
            }
        });

        done();
    };
}

