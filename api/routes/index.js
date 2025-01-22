import { Router } from 'express';
import repoRoutes from './repos.js';

const router = Router();

router.use('/repos', repoRoutes);

export default router;