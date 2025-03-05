import { FastifyReply, FastifyRequest } from 'fastify';
import { templateEmail } from './template.js';
import { BREVO_API_KEY, BREVO_API_URL, EMAIL_DESTINATION, EMAIL_FROM } from '../constants/env.js';

export class BrevoService {
    sendMailBrevoService = async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
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
                    sender: { email: EMAIL_FROM as string },
                    to: [{ email: EMAIL_DESTINATION as string }],
                    subject: subject,
                    htmlContent: templateEmail(from, content),
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
}

