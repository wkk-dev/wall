import { Router } from 'express';
import {
  getLeaderboard,
  getTopFive,
  getWeeklyStar,
  getStudyStar,
  getBestGroup,
  getBestClass,
  getBestDorm,
  updateHonorData,
} from '../controllers/honorController';

const router = Router();

router.get('/leaderboard', getLeaderboard);
router.get('/top-five', getTopFive);
router.get('/weekly-star', getWeeklyStar);
router.get('/study-star', getStudyStar);
router.get('/best-group', getBestGroup);
router.get('/best-class', getBestClass);
router.get('/best-dorm', getBestDorm);
router.post('/update', updateHonorData);

export default router;