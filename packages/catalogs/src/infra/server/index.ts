import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import GraphQLServer from './GraphQLServer';

export default class CatalogsServer {

    app = express();

    private port: Number = parseInt(process.env?.PORT as string) || 8001;
    private graphQLServer = new GraphQLServer();

    private setupMiddlewares() {
        // this.app.use(helmet()); // TODO: Temporarily disabled to prevent graphql UI issues
        this.app.use(cors());
        this.app.use(express.json());

        this.graphQLServer.server.applyMiddleware({ app: this.app, path: '/' });
    }

    startServer(): CatalogsServer {

        this.setupMiddlewares();

        this.app.listen(this.port, () => {
            console.log(`🚀 Catalogs service listening on: ${this.port}`);
        });

        return this;
    }

}