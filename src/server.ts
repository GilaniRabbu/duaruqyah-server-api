import { Server } from 'http';
import app from './app';
import config from './config';
import connectDB from './app/db/connect';

let server: Server;

function main() {
  try {
    connectDB(); // ✅ no await needed

    server = app.listen(Number(config.port), () => {
      console.log('🚀 Server is running on port', config.port);
    });
  } catch (error) {
    console.log('❌ Failed to start server:', error);
  }
}

main();

process.on('unhandledRejection', (err) => {
  console.log(`😈 unahandledRejection is detected , shutting down ...`, err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on('uncaughtException', () => {
  console.log(`😈 uncaughtException is detected , shutting down ...`);
  process.exit(1);
});
