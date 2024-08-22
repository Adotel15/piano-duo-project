import dotenv from 'dotenv';

dotenv.config();

export const PORT = Number(process.env.FASTIFY_PORT);
export const INTERFACE = process.env.FASTIFY_INTERFACE;

if(!PORT || !INTERFACE) {
    throw new Error('Please provide a valid FASTIFY_PORT and FASTIFY_INTERFACE');
}

// TODO: Separate environment variables for development and production
export const FASTIFY_SERVER_ADDRESS = {
    port: PORT,
    host: INTERFACE,
};
