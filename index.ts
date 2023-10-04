import fastifyAutoload from '@fastify/autoload';
import fastify from 'fastify';
import path from 'path';

const server = fastify({
    trustProxy: true,
});

server.register(fastifyAutoload, {
    dir: path.join(__dirname, 'routes'),
});

const IS_GOOGLE_CLOUD_RUN = process.env.K_SERVICE !== undefined;

const port = Number(process.env.PORT) || 3001;
const host = IS_GOOGLE_CLOUD_RUN ? '0.0.0.0' : undefined;

const init = host ? { port, host } : { port };

server
    .listen(init)
    .then((address) => console.log(`Server listening at ${address}`))
    .catch((err) => {
        console.log('Error starting server:', err);
        process.exit(1);
    });
