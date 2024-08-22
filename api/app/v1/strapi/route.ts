import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

import { StrapiService } from './service';
import { collectionExists } from '../helpers/collections';

import { StrapiEndpoints } from '../../types/strapi';

export const StrapiRoutes = (app: FastifyInstance, _: Record<string, unknown>, done: () => void): void  => {
    app.route({
        method: 'GET',
        url: '/:collection',
        handler: async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
            const { collection } = request.params as { collection: string };

            if(!collectionExists(collection)) {
                return reply.status(400).send({ error: 'Collection not found.' });
            }

            return await new StrapiService().getAll(collection as StrapiEndpoints, request, reply);
        }
    });

    app.route({
        method: 'GET',
        url: '/:collection/:id',
        handler: async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
            const { collection, id } = request.params as { collection: string; id: string };

            if(!collectionExists(collection)) {
                return reply.status(400).send({ error: 'Collection not found.' });
            }

            return await new StrapiService().getOne(collection as StrapiEndpoints, id, request, reply);
        }
    });

    done();
};
