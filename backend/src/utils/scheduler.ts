import cron from 'node-cron';
import { analyzePortfolio } from './analysis';

cron.schedule('0 6 * * *', async () => {
  try {
    const recommendations = await analyzePortfolio();
    console.log('Analysis Completed:', recommendations);
    // You can extend this to send email notifications
  } catch (error) {
    console.error('Error in scheduled task:', error);
  }
});
