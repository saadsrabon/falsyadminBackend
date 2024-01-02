// create routes
import  express  from 'express';
import { reportController } from './reports.controller';



const router =express.Router();
router.post('/create-report', reportController.createReport );
router.get('/', reportController.getReports );



export  const reportRoutes =router;