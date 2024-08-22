import { FastifyReply, FastifyRequest } from 'fastify';

export class StrapiService {
    async getAll(collection: string , request: FastifyRequest, reply: FastifyReply): Promise<void> {
        return reply.code(200).send({ data: collection });
    }

    async getOne(collection:string, id: string, request: FastifyRequest, reply: FastifyReply): Promise<void> {
        return reply.code(200).send({ data: { collection, id } });
    }
}

