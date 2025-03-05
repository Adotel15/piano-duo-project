import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { BrevoService } from './service';

export class BrevoRoutes {
    brevoService: BrevoService;

    constructor() {
        this.brevoService = new BrevoService();
    }

    routes = (app: FastifyInstance, _: Record<string, unknown>, done: () => void): void => {
        app.route({
            method: 'POST',
            url: '/send-mail',
            handler: async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
                const { from, subject, content } = request.body as { from: string; subject: string; content: string };

                if (!from || !subject || !content) {
                    return reply.code(400).send({ error: 'from, subject or content missing in request' });
                }

                return await this.brevoService.sendMailBrevoService(request, reply);
            }
        });

        done();
    };
}
