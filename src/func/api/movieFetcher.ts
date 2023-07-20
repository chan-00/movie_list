// import type
import { MovieTopRateType } from "@/types/topRateType";

const movieFetcher = async (url: string, options: Object) => {
    const response = await fetch(url, options);
    const data: MovieTopRateType = await response.json();

    return data;
}

export { movieFetcher };