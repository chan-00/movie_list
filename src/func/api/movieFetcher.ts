// import type
import { MovieTopRateType } from "@/types/topRateType";
import {apiKey} from "@/movieApiKey";

const movieFetcher = async () => {

    const apiUrl: string = "https://api.themoviedb.org/3/movie/top_rated?language=ko";
    const apiOptions: Object = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: apiKey,
        }
    };

    const response = await fetch(apiUrl, apiOptions);
    const data: MovieTopRateType = await response.json();

    return data;
}

export { movieFetcher };