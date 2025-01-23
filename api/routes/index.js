import { Router } from 'express';
import { getRepos } from '../controllers/repoController.js';

const router = Router();

router.use('/repos', getRepos);

export default router;