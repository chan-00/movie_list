import styled from "styled-components";
import {Modal} from "@/component/molecule/modal";
import {SetterOrUpdater} from "recoil";
import {MovieItemType} from "@/types/topRateType";
import {ImageContainer} from "@/component/atom/imageContainer";
import {Title} from "@/component/atom/title";
import {Explanation} from "@/component/atom/explanation";
import {Button} from "@/component/atom/button";


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

interface MovieModalType {
    cardDisplay: boolean;
    setCardDisplay: SetterOrUpdater<boolean>;
    clickMovieState: MovieItemType | null;
}

const MovieModal = ({ cardDisplay, setCardDisplay, clickMovieState }: MovieModalType) => {
    return (
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
        </GridModal>
    );
};

export { MovieModal };