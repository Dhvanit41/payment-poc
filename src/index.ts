import * as dotenv from 'dotenv';
import express from 'express';
import { router } from './routes/routes';
import connects from './config/db';
import { Job } from './jobs/job';

const app = express();
const PORT = 4001;

dotenv.config();

app.use('/', router);

connects();

app.listen(PORT, (): void => {
  console.log('Server is runnig on', PORT);
  new Job();
});

export default app;
