import ApplicationConfig from './utils/ApplicationConfig';
import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import Logger from './utils/Logger';

const app = express();

class Server {
  constructor() {
    new Logger();
    new ApplicationConfig();

    // this.initDB();
    this.initViewEngine();
    Server.initExpressMiddleware();
    Server.initRoutes();
    this.start();

  }

  start() {
    const server = app.listen(ApplicationConfig.getConfig().port, (info) => {
      const {address, port} = server.address();
      Logger.info(__filename, `Listening at http://${address}:${port}`);
    });
  }

  initDB() {
    let options = {
      // mongos: {
      //   ssl: true,
      //   sslValidate: true,
      //   sslCA: ca
      // },
      useMongoClient: true
    };

    mongoose.Promise = global.Promise;
    mongoose.connect(ApplicationConfig.getConfig().database, options).then(() => {
      console.log(TAG, 'Successfully connected to MongoDB');
      //initialiseDatabase();
    }).catch(err => {
      console.log(TAG, 'Not connected to the database: ' + err);
    });
  }

  initViewEngine() {

  }

  static initExpressMiddleware() {
    app.use(bodyParser.json({limit: '5mb'}));
    app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));
    app.use(express.static(__dirname + '/../www'));
  }

  static initRoutes() {
    app.use('/api/v1', routes);
    let timeStartServer = new Date();
    app.get('/api/v1/info', (req, res) => res.json({
      time_start: timeStartServer,
      version: ApplicationConfig.getConfig().version,
      config: ApplicationConfig.getConfig()
    }));
  }
}

export default Server;