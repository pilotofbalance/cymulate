import cors from 'cors';
import express from 'express';

const server = async () => {
    const app: express.Express = express();
    app.use(cors());
    app.use(express.json());
    return app;
}

export default server;