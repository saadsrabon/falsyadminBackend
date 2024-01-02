// create routes
import  express  from 'express';
import { userController } from './users.controller';


const router =express.Router();
router.post('/create-user', userController.createUserController );
router.get('/login-user', userController.loginUserController );



export  const userRoutes =router;