import fp from 'fastify-plugin';

const misc = fp(
    async (server) => {
        server.route({
            method: 'GET',
            url: '/status',
            handler: (_, reply) => {
                return reply.code(200).send({ status: 'online' });
            },
        });
    },
    {
        name: 'status',
    },
);

export default misc;
