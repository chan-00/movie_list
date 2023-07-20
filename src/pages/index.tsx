// import function
import {movieFetcher} from "@/func/api/movieFetcher";
// import react hooks
import {useEffect} from "react";
// import type
import { MovieTopRateType } from "@/types/topRateType";
// import api key
import {apiKey} from "@/movieApiKey";

interface MovieHomePageType {
    data: MovieTopRateType;
}

export default function Home({ data }: MovieHomePageType) {

    useEffect(() => {
        console.log(data);
    }, []);

    return (
        <>
          안녕
        </>
    )
}

export const getStaticProps = async () => {

    const apiUrl: string = "https://api.themoviedb.org/3/movie/top_rated";
    const apiOptions: Object = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: apiKey,
        }
    };

    const data = await movieFetcher(apiUrl, apiOptions);

    // 페이지 컴포넌트로 가져온 데이터를 전달합니다.
    return {
        props: {
            data,
        },
    };
}