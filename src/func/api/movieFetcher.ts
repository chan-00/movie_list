// import type
import { MovieTopRateType } from "@/types/topRateType";

const movieFetcher = async (page: number = 1): Promise<MovieTopRateType> => {

    const apiUrl: string = `https://api.themoviedb.org/3/movie/top_rated?language=ko&page=${page}`;
    const apiOptions: Object = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`,
        }
    };

    const response = await fetch(apiUrl, apiOptions);
    const data: MovieTopRateType = await response.json();

    return data;
}

export { movieFetcher };