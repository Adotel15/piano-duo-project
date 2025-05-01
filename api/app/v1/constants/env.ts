import dotenv from 'dotenv';

dotenv.config();

export const PORT = Number(process.env.FASTIFY_PORT);
export const INTERFACE = process.env.FASTIFY_INTERFACE;
export const STRAPI_URL = process.env.STRAPI_URL;
export const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

export const BREVO_API_URL = process.env.BREVO_API_URL;
export const BREVO_API_KEY = process.env.BREVO_API_KEY;
export const EMAIL_DESTINATION = process.env.EMAIL_DESTINATION;
export const EMAIL_FROM = process.env.EMAIL_FROM;

// TODO: Separate environment variables for development and production
export const FASTIFY_SERVER_ADDRESS = {
    port: PORT,
    host: INTERFACE,
};

if(!PORT || !INTERFACE) {
    throw new Error('Please provide a valid FASTIFY_PORT and FASTIFY_INTERFACE');
}

if(!STRAPI_URL || !STRAPI_TOKEN) {
    throw new Error('Please provide a valid STRAPI_URL and STRAPI_TOKEN');
}

if(!BREVO_API_URL || !BREVO_API_KEY) {
    throw new Error('Please provide a valid BREVO_API_URL and BREVO_API_KEY');
}

if(!EMAIL_DESTINATION || !EMAIL_FROM) {
    throw new Error('Please provide a valid EMAIL_DESTINATION');
}
