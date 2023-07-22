// import function
import {movieFetcher} from "@/func/api/movieFetcher";
// import type
import {MovieItemType, MovieTopRateType} from "@/types/topRateType";
// import Components
import {Card} from "@/component/molecule/card";
// import react query
import {useQuery, QueryClient, dehydrate} from "@tanstack/react-query";

interface MovieHomePageType {
    data: MovieTopRateType;
}

export default function Home() {
    const { data } = useQuery({ queryKey: ['movieList'], queryFn: movieFetcher })

    return (
        <div>
            {data?.results.map((movieData: MovieItemType) => (
                <Card key={movieData.id}
                      imageSrc={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
                      headerText={movieData.title}
                />
            ))}
        </div>
    )
}

export const getStaticProps = async () => {

    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(['movieList'], movieFetcher)

    // 페이지 컴포넌트로 가져온 데이터를 전달합니다.
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}