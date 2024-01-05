// create routes
import  express  from 'express';
import { reportController } from './reports.controller';



const router =express.Router();
router.post('/create-report', reportController.createReport );
router.get('/', reportController.getReports );
router.put('/upvote/:reportId', reportController.upvote );



export  const reportRoutes =router;