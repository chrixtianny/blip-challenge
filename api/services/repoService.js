import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

export async function getRepositories() {
    try {
        const response = await fetch("https://api.github.com/users/takenet/repos?sort=created&direction=asc", {
            headers: {
                Authorization: `Bearer ${process.env.GIT_TOKEN}`,
              },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - Não foi possível buscar os repositórios do GitHub, verifique Token e Requisição.`);
        }

        const data = await response.json();

        const csharpRepos = data.filter(repo => repo.language === "C#");

        return csharpRepos.map((repo) => ({
            fullname: repo.full_name,
            description: repo.description,
            url: repo.html_url,
            created_at: repo.created_at,
            avatar: repo.owner.avatar_url,
        })).slice(0, 5);

        } catch (error) {
            throw new Error(error.message);
        }
    }


