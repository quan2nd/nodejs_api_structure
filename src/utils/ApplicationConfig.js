import baseConfig from '../base-config';
import Logger from './Logger';

let _config;
class ApplicationConfig{
  constructor(){
    _config = baseConfig;
    if(process.env.PORT){
      _config.port = process.env.PORT;
    }
    Logger.info(__filename, _config);
  }
  static getConfig(){
    return _config;
  }
}
export default ApplicationConfig