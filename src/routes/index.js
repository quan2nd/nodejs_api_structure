import { Router } from 'express';
import UserRoute from '../api/user/UserRouter';

const route = Router();

route.use('/user',UserRoute);
export default route;