import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

import { StrapiService } from './service';

export const StrapiRoutes = (app: FastifyInstance, _: Record<string, unknown>, done: () => void): void  => {
    app.route({
        method: 'GET',
        url: '/',
        handler: async (request: FastifyRequest, reply: FastifyReply)
        : Promise<void> => new StrapiService().handler(request, reply),
    });

    done();
};
