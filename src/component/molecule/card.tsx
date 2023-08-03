import styled from "styled-components";
import Image from "next/image";
import React from "react";

interface CardType {
    className?: string;
    imageSrc: string;
    headerText: string;
    handleClickEvent: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const CardStyle = styled.div`
  border: 1px solid black;
  width: 150px;
  height: 200px;
  display: inline-block;
  
  margin: 25px;
  
  text-align: center;
  
  cursor: pointer;
  
  > div {
    width: 150px;
    height: 150px;
    position: relative;
  }
  
  > h4 {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

const Card = ({ className, imageSrc, headerText, handleClickEvent }: CardType) => {

    const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
        handleClickEvent?.(e);
    }

    return (
        <CardStyle className={className} onClick={handleClick}>
            <div>
                <Image src={imageSrc} alt={headerText} fill={true} />
            </div>
            <h4>{headerText}</h4>
        </CardStyle>
    );
};

export {Card};