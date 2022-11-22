import { CronJob } from 'cron';
import { getCurrentDateTRM } from '../controllers/trm';

export class Job {
  cronJob: CronJob;
  constructor() {
    this.cronJob = new CronJob('* 07 * * * *', async () => {
      await getCurrentDateTRM('USD', 'UYU');
    });
  }
}
