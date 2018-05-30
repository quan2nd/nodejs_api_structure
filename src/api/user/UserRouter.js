import  { Router } from 'express';
import validateRequest from '../../utils/validateRequest';
import UserController from './UserController';

const router = Router();
const userCtl = new UserController();

router.route('/').get(userCtl.getAll);
//router.use(validateRequest);

export default router;