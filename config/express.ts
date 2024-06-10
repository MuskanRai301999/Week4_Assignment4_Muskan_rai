import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { json, urlencoded } from 'express';

import organizationRoutes from '../routes/organizationRoutes';
import customerRoutes from '../routes/customerRoutes';
import sowRoutes from '../routes/sowRoutes';
import invoiceRoutes from '../routes/invoiceRoutes';


import { errorHandler } from '../middleware/errorMiddleware';

const createApp = (): Application => {
  const app: Application = express();

  // Middleware setup
  app.use(cors());
  app.use(helmet());
  app.use(morgan('dev'));
  app.use(json());
  app.use(urlencoded({ extended: true }));

  // Routes setup
  app.use('/api/organizations', organizationRoutes);
  app.use('/api/clients', customerRoutes);
  app.use('/api/sows', sowRoutes);
  app.use('/api/invoices', invoiceRoutes);
 

  // Error handling middleware
  app.use(errorHandler);

  return app;
};

export default createApp;
