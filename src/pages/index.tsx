// import function
import {movieFetcher} from "@/func/api/movieFetcher";
// import react hooks
import {useEffect} from "react";
// import type
import {MovieItemType, MovieTopRateType} from "@/types/topRateType";
// import api key
import {apiKey} from "@/movieApiKey";
// import Components
import {Card} from "@/component/molecule/card";

interface MovieHomePageType {
    data: MovieTopRateType;
}

export default function Home({ data }: MovieHomePageType) {

    useEffect(() => {
        console.log(data);
    }, []);

    return (
        <div>
            {data.results.map((movieData: MovieItemType) => (
                <Card key={movieData.id}
                      imageSrc={movieData.poster_path}
                      headerText={movieData.title}
                />
            ))}
        </div>
    )
}

export const getStaticProps = async () => {

    const apiUrl: string = "https://api.themoviedb.org/3/movie/top_rated?language=ko";
    const apiOptions: Object = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: apiKey,
        }
    };

    const data: MovieTopRateType = await movieFetcher(apiUrl, apiOptions);

    // 페이지 컴포넌트로 가져온 데이터를 전달합니다.
    return {
        props: {
            data,
        },
    };
}