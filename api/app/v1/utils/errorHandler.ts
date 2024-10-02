import { FastifyInstance } from 'fastify';

export const manageError = (fastifyServer: FastifyInstance, error: Error | null) => {
    fastifyServer.log.error(error);
    process.exit(1);
};
