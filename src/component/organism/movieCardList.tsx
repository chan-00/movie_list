import {InfiniteData} from "@tanstack/query-core";
import {MovieItemType, MovieTopRateType} from "@/types/topRateType";
import {Card} from "@/component/molecule/card";
import {Dispatch, SetStateAction} from "react";
import {SetterOrUpdater} from "recoil";

interface MovieCardListType {
    data?: InfiniteData<MovieTopRateType>;
    setClickMovieState: Dispatch<SetStateAction<MovieItemType | null>>;
    setCardDisplay: SetterOrUpdater<boolean>;
}

const MovieCardList = ({ data, setClickMovieState, setCardDisplay }: MovieCardListType) => {

    return (
        <div>
            {data?.pages.map((moviePage: MovieTopRateType) =>
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
        </div>
    )
}

export { MovieCardList };