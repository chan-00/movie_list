import styled from "styled-components";
import React from "react";
import {SetterOrUpdater} from "recoil";

interface ModalType {
    className?: string;
    children: React.ReactNode;
    display: boolean;
    setDisplay: SetterOrUpdater<boolean>;
}

interface ModalContainerStyleType {
    display: string;
}

const ModalContainerStyle = styled.div<ModalContainerStyleType>`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.5);
  
    z-index: 2;
    
    display: ${props => props.display === "true" ? "block" : "none"};
`;

const ModalStyle = styled.div`
  background-color: white;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 10px;
  
  text-align: center;
`;

const Modal = ({ className, children, display, setDisplay }: ModalType) => {

    return (
        <ModalContainerStyle display={display.toString()} onClick={() => {
            setDisplay(false);
        }}>
            <ModalStyle className={className}>
                {children}
            </ModalStyle>
        </ModalContainerStyle>
    );
}

export { Modal };