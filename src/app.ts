import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import router from './router';
import { environment } from './config';
import logger from './config/logger';
import listEndpoints from 'express-list-endpoints';
import queue from './queue';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();
    this.routes();
  }

  private routes(): void {
    this.app.get('/healthcheck', (req, res) => res.json({ ok: true }));
    this.app.use(router);
  }

  private config():void {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(morgan('dev'));
  }

  public async start(PORT: string | number) {
    await queue.start();
    logger.info('Connection with message broker stablished');
    
    await mongoose.connect(environment.MONGODB_CONN_STR);
    logger.info(`Connection with database stablished`);

    this.app.listen(PORT, () => {
      logger.info(`Running on port ${PORT}`);
      console.table(listEndpoints(this.app));
    });
  }
}

export { App };

// Essa segunda exportação é estratégica, e a execução dos testes de cobertura depende dela
export const { app } = new App();
