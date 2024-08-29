import Fastify, { FastifyInstance, FastifyRequest } from 'fastify';

import { StrapiRoutes } from './v1/strapi/route';

import { manageError } from './v1/utils/errorHandler';

import { FASTIFY_SERVER_ADDRESS } from './v1/constants/env';
import { ROUTES } from './config/routes';

class FastifyServer {
    private server: FastifyInstance;

    constructor() {
        this.server = Fastify();
        this.server.register(new StrapiRoutes().routes, { prefix: ROUTES.v1.strapi });
        this.server.addHook('onRequest', async (request: FastifyRequest) => {
            // eslint-disable-next-line no-console
            console.log(`Petition on path => ${request.url}`);
        });
    }

    startServer = async () => {
        try {
            this.server.listen(FASTIFY_SERVER_ADDRESS, (err, address) => {
                if (err) manageError(this.server, err);
                // eslint-disable-next-line no-console
                console.log(`Fastify API Dev server listening at ${address}!`);
            });
        } catch (err) {
            manageError(this.server, err);
        }
    };
}

new FastifyServer().startServer();
