import styled from "styled-components";
import React from "react";

const CenterContainerStyle = styled.div`
    display: grid;
    place-items: center;
`

interface CenterContainerType {
    className?: string;
    children: React.ReactNode;
}

const CenterContainer = ({ className, children }: CenterContainerType) => {
    return (
        <CenterContainerStyle className={className}>
            {children}
        </CenterContainerStyle>
    )
}

export { CenterContainer };