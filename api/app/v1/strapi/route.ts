import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

import { StrapiService } from './service';

export const StrapiRoutes = (app: FastifyInstance, _: Record<string, unknown>, done: () => void): void  => {
    app.route({
        method: 'GET',
        url: '/:collection',
        handler: async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
            const { collection } = request.params as { collection: string };
            if (collection.endsWith('s')) {
                return await new StrapiService().getAll(collection, request, reply);
            } else {
                return reply.status(400).send({ error: 'Collection should be in plural form to get all records.' });
            }
        }
    });

    app.route({
        method: 'GET',
        url: '/:collection/:id',
        handler: async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
            const { collection, id } = request.params as { collection: string; id: string };

            if (!collection.endsWith('s')) {
                return await new StrapiService().getOne(collection, id, request, reply);
            } else {
                return reply.status(400).send({ error: 'Collection should be in singular form to get a specific record by ID.' });
            }
        }
    });

    done();
};
