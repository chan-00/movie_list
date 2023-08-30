import React, {useRef, useState} from 'react';
import {dehydrate, QueryClient} from "@tanstack/react-query";
import {useRouter} from "next/router";
import {movieSearchFetcher} from "@/func/api/movieSearchFetcher";
import {useSearchInfiniteMovieQuery} from "@/func/customHook/useSearchInfiniteMovieQuery";
import {useRecoilState} from "recoil";
import {MovieItemType} from "@/types/topRateType";
import {useObserver} from "@/func/customHook/useObserver";
import {cardModalDisplay} from "@/recoilAtom/cardModalDisplay";
import {MovieModal} from "@/component/organism/movieModal";
import {CenterContainer} from "@/component/atom/centerContainer";
import {MovieCardList} from "@/component/organism/movieCardList";

const SearchPage = () => {

    const router = useRouter();
    const { searchText } = router.query;

    const { data,
            fetchNextPage,
            hasNextPage,
            isFetchingNextPage }
    = useSearchInfiniteMovieQuery({queryKey: "movieSearchList", apiFetcher: movieSearchFetcher, searchText: searchText});

    // recoil 값 사용
    const [ cardDisplay, setCardDisplay ] = useRecoilState<boolean>(cardModalDisplay);
    // 클릭한 카드의 영화 데이터를 담을 state 변수
    const [ clickMovieState, setClickMovieState] = useState<MovieItemType|null>(null);

    const bottom = useRef(null);

    const onIntersect = ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }


    useObserver({
        target: bottom,
        onIntersect,
    })

    if(data?.pages[0].results.length !== 0) {
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
        );
    }
    else {
        return (
            <CenterContainer>
                <h1>입력한 검색어에 대한 결과물이 존재하지 않습니다!</h1>
            </CenterContainer>
        )
    }

};

export const getServerSideProps = async () => {

    const queryClient = new QueryClient();

    // 페이지 컴포넌트로 가져온 데이터를 전달합니다.
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}

export default SearchPage;