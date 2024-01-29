import axios from "axios";
import chalk from "chalk";


export async function cekValidasi(NamaUser) {
    try {
        const config = {
            headers: { 'Authorization': `token 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` }
        };
        const followers = await axios.get(`https://api.github.com/users/mhrdwan/followers`, config);
        const stargazers = await axios.get(`https://api.github.com/repos/mhrdwan/Auto-Claim-Whitelist-Personajourney/stargazers`, config);

        const followersUsernames = followers.data.map(item => item.login);
        const stargazersUsernames = stargazers.data.map(item => item.login);
        const isStargazer = stargazersUsernames.some((item) => item == NamaUser)
        const isFollower = followersUsernames.some((item) => item == NamaUser)


        let message = "";
        if (isFollower && isStargazer) {
            return "[✅] Thanks for following and starring :)";
        } else if (!isFollower && isStargazer) {
            message = "[❗] You must follow my GitHub first: https://github.com/mhrdwan";
        } else if (!isStargazer && isFollower) {
            message = "[❗] You must star my repo first: https://github.com/mhrdwan/Auto-Claim-Whitelist-Personajourney";
        } else {
            message = "[❗] You must follow https://github.com/mhrdwan and Star my repo first: https://github.com/mhrdwan/Auto-Claim-Whitelist-Personajourney :)";
        }
        return message;
    } catch (error) {
        console.error(error.response.data.message);
        throw error;
    }
}

