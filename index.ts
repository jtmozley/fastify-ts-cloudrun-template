import fastifyAutoload from '@fastify/autoload';
import fastify from 'fastify';
import path from 'path';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import cors from '@fastify/cors';
import fastifyRequestLogger from '@mgcrea/fastify-request-logger';

import 'dotenv/config';

const swaggerOptions = {
    hideUntagged: true,
    openapi: {
        info: {
            title: 'Title',
            description: 'Test description',
            version: process.env.npm_package_version as string,
        },
        host: 'http://localhost:3001', // api base url
        schemes: ['https'],
        consumes: ['application/json'],
        produces: ['application/json', 'image/gif'],
        tags: [{ name: 'Test', description: 'Test description' }],
    },
};

const swaggerUiOptions = {
    routePrefix: '/docs',
};

const server = fastify({
    trustProxy: true,
});

server.register(cors, {
    origin: [''],
    credentials: true,
});

server.register(fastifyRequestLogger);

server.register(fastifyAutoload, {
    dir: path.join(__dirname, 'routes'),
});

server.register(fastifySwagger, swaggerOptions);
server.register(fastifySwaggerUi, swaggerUiOptions);

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
