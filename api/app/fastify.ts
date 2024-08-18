import Fastify from 'fastify';
import FastifyStatic from 'fastify-static';

import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config();

const PORT = Number(process.env.FASTIFY_PORT) || 3000;
const INTERFACE = process.env.FASTIFY_INTERFACE || '127.0.0.1';

const fastifyData = {
    port: PORT,
    host: INTERFACE,
};

const fastifyServer = Fastify({
    // logger: true,
});

// Vite assets
// fastifyServer.register(FastifyStatic, {
//     root: path.join(__dirname, '../../web/dist'),
//     prefix: '/',
// });

// Server API
fastifyServer.register(async function (fastifyInstance) {
    fastifyInstance.post('/api', async (request, reply) => {
        console.log(request.body);
        return reply.code(200).send({ hello: 'world' });
    });
});

const manageError = error => {
    fastifyServer.log.error(error);
    process.exit(1);
};

const startServer = async () => {
    try {
        fastifyServer.listen(fastifyData, (err, address) => {
            if (err)
                manageError(err);

            // eslint-disable-next-line no-console
            console.log('Server listening at', address);
        });
    } catch (err) {
        manageError(err);
    }
};

startServer();
