import log4js from 'log4js';

let logger;

class Logger {
  constructor() {
    logger = log4js.getLogger();
    logger.level = 'debug';
  }

  static logFileName(filename) {
    logger.info(`Log file: ${filename.substring(filename.lastIndexOf('/') + 1, filename.lastIndexOf('.'))}`);
  }

  static trace(filename, ...args) {
    Logger.logFileName(filename);
    logger.trace(...args);
  }

  static debug(filename, ...args) {
    Logger.logFileName(filename);
    logger.debug(...args);
  }

  static info(filename, ...args) {
    Logger.logFileName(filename);
    logger.info(...args);
  }

  static warn(filename, ...args) {
    Logger.logFileName(filename);
    logger.warn(...args);
  }

  static error(filename, ...args) {
    Logger.logFileName(filename);
    logger.error(...args);
  }

  static fatal(filename, ...args) {
    Logger.logFileName(filename);
    logger.fatal(...args);
  }
}

export default Logger;