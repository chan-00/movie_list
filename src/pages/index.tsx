// import function
import {movieFetcher} from "@/func/api/movieFetcher";
// import type
import {MovieItemType} from "@/types/topRateType";
// import Components
import {Card} from "@/component/molecule/card";
// import react query
import { QueryClient, dehydrate } from "@tanstack/react-query";
import {useEffect, useRef, useState} from "react";
import {useObserver} from "@/func/customHook/useObserver";
import {useRecoilState} from "recoil";
import {cardModalDisplay} from "@/recoilAtom/cardModalDisplay";
import {Modal} from "@/component/molecule/modal";
import {Title} from "@/component/atom/title";
import {Explanation} from "@/component/atom/explanation";
import {Button} from "@/component/atom/button";
import {ImageContainer} from "@/component/atom/imageContainer";
import styled from "styled-components";
import {useInfiniteMovieQuery} from "@/func/customHook/useInfiniteMovieQuery";

const GridModal = styled(Modal)`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const ModalContentsContainer = styled.div`
    position: relative;
  
    > button {
      position: absolute;
      bottom: 10px;
    }
`;

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

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div>
            {cardDisplay ?
            <GridModal display={cardDisplay} setDisplay={setCardDisplay}>
                <ImageContainer src={`https://image.tmdb.org/t/p/w500${clickMovieState?.poster_path}`}
                                alt={clickMovieState ? clickMovieState.title : "내용이 없습니다."}
                                width={"100%"} height={"100%"} />
                <ModalContentsContainer>
                    <Title text={clickMovieState?.title} />
                    <Explanation text={clickMovieState?.overview} />
                    <Button text="닫기" handleClickEvent={() => {
                        setCardDisplay(false);
                    }} />
                </ModalContentsContainer>
            </GridModal> : null}

            {data?.pages.map((moviePage) =>
                moviePage.results.map((movieData) => (
                    <Card key={movieData.id}
                          imageSrc={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
                          headerText={movieData.title}
                          handleClickEvent={() => {
                              setClickMovieState(movieData);
                              setCardDisplay(true);
                          }}
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