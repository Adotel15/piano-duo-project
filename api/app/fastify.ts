import Fastify from 'fastify';

import { StrapiRoutes } from './v1/strapi/route';

import { manageError } from './v1/utils/errorHandler';

import { FASTIFY_SERVER_ADDRESS } from './v1/constants/env';
import { ROUTES } from './config/routes';

const server = Fastify();

server.register(StrapiRoutes, { prefix: ROUTES.v1.strapi });

const startServer = async () => {
    try {
        server.listen(FASTIFY_SERVER_ADDRESS, (err, address) => {
            if (err) manageError(server, err);
            // eslint-disable-next-line no-console
            console.log(`Fastify API Dev server listening at ${address}!`);
        });
    } catch (err) {
        manageError(server, err);
    }
};

startServer();
