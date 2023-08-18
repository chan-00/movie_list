import React from 'react';
import {dehydrate, QueryClient} from "@tanstack/react-query";
import {useRouter} from "next/router";
import {movieSearchFetcher} from "@/func/api/movieSearchFetcher";
import {useSearchInfiniteMovieQuery} from "@/func/customHook/useSearchInfiniteMovieQuery";

const SearchPage = () => {

    const router = useRouter();
    const { searchText } = router.query;

    const { data, fetchNextPage } = useSearchInfiniteMovieQuery({queryKey: "movieSearchList", apiFetcher: movieSearchFetcher, searchText: searchText});

    console.log(data);

    return (
        <div>
            <h1>{searchText}</h1>
        </div>
    );
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