import { getRepositories } from '../services/repoService.js';

export async function getRepos(req, res, next) {
    try {
        const repos = await getRepositories();
        res.status(200).json(repos);
    } catch (error) {
        next(error);
    }
}