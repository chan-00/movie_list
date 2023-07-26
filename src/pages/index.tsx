// import function
import {movieFetcher} from "@/func/api/movieFetcher";
// import type
import {MovieItemType, MovieTopRateType} from "@/types/topRateType";
// import Components
import {Card} from "@/component/molecule/card";
// import react query
import {useQuery, QueryClient, dehydrate, useInfiniteQuery} from "@tanstack/react-query";
import {useRef} from "react";
import {useObserver} from "@/func/customHook/useObserver";

interface MovieHomePageType {
    data: MovieTopRateType;
}

export default function Home() {
    const { data, fetchNextPage, isFetchingNextPage, status } = useInfiniteQuery(
        ["movieList"],
        ({ pageParam = 1 }) => movieFetcher(pageParam),
        {
            getNextPageParam: (lastPage, allPages): number|null => {
                if(lastPage?.total_pages > lastPage?.page) {
                    return lastPage?.page + 1;
                }
                else {
                    return null;
                }
            },
        }
    );

    const bottom = useRef(null);
    const onIntersect = ([entry]: IntersectionObserverEntry[]) => entry.isIntersecting && fetchNextPage();

    useObserver({
        target: bottom,
        onIntersect,
    })

    return (
        <div>
            {data?.pages.map((moviePage) =>
                moviePage.results.map((movieData) => (
                    <Card key={movieData.id}
                          imageSrc={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
                          headerText={movieData.title}
                    />
                ))
            )}

            <div ref={bottom} />
        </div>
    )
}

export const getStaticProps = async () => {

    const queryClient = new QueryClient();

    // 페이지 컴포넌트로 가져온 데이터를 전달합니다.
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}