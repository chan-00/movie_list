// import function
import {movieFetcher} from "@/func/api/movieFetcher";
// import type
import {MovieItemType} from "@/types/topRateType";
// import react query
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { useRef, useState} from "react";
import {useObserver} from "@/func/customHook/useObserver";
import {useRecoilState} from "recoil";
import {cardModalDisplay} from "@/recoilAtom/cardModalDisplay";
import {MovieModal} from "@/component/organism/movieModal";
import {useInfiniteMovieQuery} from "@/func/customHook/useInfiniteMovieQuery";
import {MovieCardList} from "@/component/organism/movieCardList";

export default function Home() {

    //무한 스크롤링을 위한 useInfiniteQuery 코드
    const { data, fetchNextPage } = useInfiniteMovieQuery({queryKey: "movieList", apiFetcher: movieFetcher});

    // recoil 값 사용
    const [ cardDisplay, setCardDisplay ] = useRecoilState<boolean>(cardModalDisplay);
    // 클릭한 카드의 영화 데이터를 담을 state 변수
    const [ clickMovieState, setClickMovieState] = useState<MovieItemType|null>(null);

    const bottom = useRef(null);
    const onIntersect = ([entry]: IntersectionObserverEntry[]) => entry.isIntersecting && fetchNextPage();

    useObserver({
        target: bottom,
        onIntersect,
    })

    return (
        <div>
            {cardDisplay ?
                <MovieModal cardDisplay={cardDisplay}
                            setCardDisplay={setCardDisplay}
                            clickMovieState={clickMovieState} />
            : null}

            <MovieCardList data={data} setClickMovieState={setClickMovieState} setCardDisplay={setCardDisplay} />

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