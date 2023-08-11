import styled from "styled-components";
import React from "react";

const InputStyle = styled.input`
  padding: 5px;
  font-size: 10px;
`;

interface InputType {
    placeholderText: string;
    type: string;
    handleKeyDownEvent: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    handleChangeEvent: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

const Input = ({placeholderText, type, handleKeyDownEvent, handleChangeEvent, className}: InputType) => {

    return (
        <InputStyle className={className}
                    type={type}
                    placeholder={placeholderText}
                    onKeyDown={handleKeyDownEvent}
                    onChange={handleChangeEvent}/>
    );
};

export { Input }