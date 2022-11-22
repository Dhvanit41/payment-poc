import { CronJob } from 'cron';
import { getCurrentDateTRM } from '../controllers/trm';

export class Job {
    cronJob: CronJob;

    constructor() {
        this.cronJob = new CronJob('* 07 * * * *', async () => {
            try {
              await getCurrentDateTRM("USD","UYU")
            } catch (e) {
              console.error(e);
            }
          });
          if (!this.cronJob.running) {
            this.cronJob.start();
          }

    }
}

