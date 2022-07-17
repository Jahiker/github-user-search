import { urlFetch } from "../constants";

export const getGithubUsers = async (user) => {
    const response = await fetch(`${urlFetch}${user}`, {
        method: 'GET',
        auth: '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'
    })

    const payload = response.json();

    return payload;
}