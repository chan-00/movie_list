// import type
import { MovieTopRateType } from "@/types/topRateType";

interface movieSearchFetcherType {
    page: number;
    searchText: string | string[] | undefined;
}

const movieSearchFetcher = async ({ page = 1, searchText }: movieSearchFetcherType) => {

    const apiUrl: string = `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=ko&page=${page}`;
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

export { movieSearchFetcher };
export type { movieSearchFetcherType };