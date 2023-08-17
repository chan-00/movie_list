import {useInfiniteQuery} from "@tanstack/react-query";
import {MovieTopRateType} from "@/types/topRateType";

interface useInfiniteMovieQueryType {
    queryKey: string;
    apiFetcher: (page: number) => Promise<MovieTopRateType>;
}

const useInfiniteMovieQuery = ({ queryKey, apiFetcher }: useInfiniteMovieQueryType) => {
    return useInfiniteQuery(
        [queryKey],
        ({ pageParam = 1 }) => apiFetcher(pageParam),
        {
            getNextPageParam: (lastPage): number|null => {
                // API 로 받아 온 데이터 중 현재 page 값이 총 page 값보다 작다면(아직 불러올 데이터가 남았다면),
                // 다음 페이지 데이터를 받아 오기 위해 현재 page 값에서 +1 을 한 값을 반환한다.
                if(lastPage?.total_pages > lastPage?.page) {
                    return lastPage?.page + 1;
                }
                // 위의 조건이 아니라면 불러올 데이터가 없기 때문에 null 을 반환한다.
                else {
                    return null;
                }
            },
        }
    );
}

export { useInfiniteMovieQuery };