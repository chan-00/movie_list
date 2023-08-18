import React from 'react';
import {dehydrate, QueryClient} from "@tanstack/react-query";

const SearchPage = () => {

    return (
        <div>
            <h1>Search Page</h1>
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