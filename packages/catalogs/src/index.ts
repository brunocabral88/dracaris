import * as dotenv from 'dotenv';

import CatalogsServer from './infra/server';

dotenv.config();

const server = new CatalogsServer();

server.startServer();

process.on('SIGINT', () => {
    console.log('Shutting catalogs down..');
    process.exit();
});
