import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { BREVO_API_KEY, BREVO_API_URL, EMAIL_DESTINATION } from './constants/env.js';

const sendMailBrevoService = async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
    const { from, subject, content } = request.body as {
        from: string;
        subject: string;
        content: string;
    };

    try {
        const response = await fetch(BREVO_API_URL as string, {
            method: 'POST',
            headers: {
                'api-key': BREVO_API_KEY as string,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                sender: { email: from },
                to: [{ email: EMAIL_DESTINATION as string }],
                subject: subject,
                htmlContent: content,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            // eslint-disable-next-line no-console
            console.log(response);
        }
        reply.code(200).send({
            message: 'Correo enviado exitosamente',
            data,
        });
    } catch (error) {
        reply.code(500).send({ error: 'Error al enviar el correo', details: error });
    }
};

export const BrevoRoutes = (app: FastifyInstance, _: Record<string, unknown>, done: () => void): void => {
    app.route({
        method: 'POST',
        url: '/send-mail',
        handler: async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
            const { from, subject, content } = request.body as { from: string; subject: string; content: string };

            if (!from || !subject || !content) {
                return reply.code(400).send({ error: 'from, subject or content missing in request' });
            }

            return await sendMailBrevoService(request, reply);
        }
    });

    done();
};
