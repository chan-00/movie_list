import styled from "styled-components";
import React, {useState} from "react";
import {Title} from "@/component/atom/title";
import {WidthMenu} from "@/component/molecule/widthMenu";
import {Input} from "@/component/atom/input";
import {Button} from "@/component/atom/button";
import {DirectionSortContainer} from "@/component/atom/directionSortContainer";
import {useRouter} from "next/router";

interface HeaderType {
    className?: string;
    title: string;
    itemArray: Array<string>;
}

//항상 화면 상단에 Header 를 위치시키게 하기 위해 fixed, top, left 값을 줬다.
const HeaderStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: black;
    display: grid;
    grid-template-columns: 200px 1fr 1fr;
  
    z-index: 1;
`;

const InfoButtonContainerStyle = styled.div`
    display: flex;
    align-items: center;
`;

const HeaderTitle = styled(Title)`
    cursor: pointer;
    color: white;
`;

const Header = ({ className, title, itemArray }: HeaderType) => {

    const [ searchText, setSearchText ] = useState<string>("");

    const router = useRouter();

    // input 태그 입력 중 enter 키를 누르거나 검색 버튼 클릭 시 search 페이지로 이동하며,
    // 사용자가 입력한 검색어 값을 쿼리 스트링으로 건네 준다.
    const handleEvent = (e: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>) => {
        if(e.type === 'keydown') {
            const keyboardEvent = e as React.KeyboardEvent<HTMLInputElement>;
            if (keyboardEvent.key === 'Enter') {
                if(searchText.length !== 0) {
                    router.push({
                        pathname: "/search",
                        query: {
                            searchText: searchText
                        }
                    });
                }
            }
        }
        else if(e.type === 'click') {
            if(searchText.length !== 0) {
                router.push({
                    pathname: "/search",
                    query: {
                        searchText: searchText
                    }
                });
            }
        }
    }

    // Header 의 Title 클릭 시 메인 페이지로 이동하게 하기 위한 이벤트 함수
    const handleTitleClick = () => {
        router.push({pathname: "/"});
    }

    // 사용자가 입력하는 input 값을 state 변수에 넣어주게 하기 위한 이벤트 함수
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    }

    return (
        <HeaderStyle className={className}>
            <DirectionSortContainer direction={"left"}>
                <HeaderTitle text={title} clickEventFunction={handleTitleClick} />
            </DirectionSortContainer>

            <DirectionSortContainer direction={"left"}>
                <WidthMenu itemArray={itemArray} />
            </DirectionSortContainer>

            <DirectionSortContainer direction={"right"} >
                <InfoButtonContainerStyle>
                    <Input placeholderText={"검색어를 입력하세요."} type={"text"}
                           handleKeyDownEvent={handleEvent}
                           handleChangeEvent={handleOnChange}/>
                    <Button text={"검색"} handleClickEvent={handleEvent} />
                </InfoButtonContainerStyle>
            </DirectionSortContainer>
        </HeaderStyle>
    );
};

export { Header }