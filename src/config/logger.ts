import winston from 'winston';

const logger = winston.createLogger();

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple(),
    }));
  }

export default logger;