import express from 'express';
import bodyParser from 'body-parser';
import invoiceRoutes from './routes/invoiceRoutes';
import customerRoutes from './routes/customerRoutes';
import organizationRoutes from './routes/organizationRoutes';
import sowRoutes from './routes/sowRoutes';
import { errorHandler } from './middleware/errorMiddleware';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/invoices', invoiceRoutes);
app.use('/customers', customerRoutes);
app.use('/organizations', organizationRoutes);
app.use('/sows', sowRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
