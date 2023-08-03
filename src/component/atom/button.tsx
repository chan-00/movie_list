import styled from "styled-components";
import React from "react";

const ButtonStyle = styled.button`
  color: black;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  
  transition-duration: 0.3s;
  
  cursor: pointer;
`;

interface ButtonType {
    text: string;
    handleClickEvent: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}

const Button = ({text, handleClickEvent, className}: ButtonType) => {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
        handleClickEvent?.(e);
    }

    return (
        <ButtonStyle className={className} onClick={handleClick}>
            {text}
        </ButtonStyle>
    );
};

export { Button }