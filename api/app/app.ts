import Fastify, { FastifyInstance, FastifyRequest } from 'fastify';
import cors from '@fastify/cors';

import { StrapiRoutes } from './v1/strapi/route.js';
import { BrevoRoutes } from './v1/brevo/route.js';

import { manageError } from './v1/utils/errorHandler.js';

import { FASTIFY_SERVER_ADDRESS } from './v1/constants/env.js';
import { ROUTES } from './config/routes.js';

class FastifyServer {
    private server: FastifyInstance;

    constructor() {
        this.server = Fastify();
        this.server.register(new StrapiRoutes().routes, { prefix: ROUTES.v1.api });
        this.server.register(new BrevoRoutes().routes, { prefix: ROUTES.v1.api });
        this.server.register(cors, {
            origin: true,
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
        });
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
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            manageError(this.server, err);
        }
    };
}

new FastifyServer().startServer();
