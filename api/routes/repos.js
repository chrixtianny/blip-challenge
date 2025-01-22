import { Router } from 'express';
import { getRepos } from '../controllers/repoController.js';

const router = Router();

router.get('/', getRepos);

export default router;