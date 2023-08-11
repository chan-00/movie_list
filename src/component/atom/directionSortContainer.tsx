import styled from "styled-components";
import React from "react";

interface DirectionSortContainerType {
    className?: string;
    direction: string;
    children: React.ReactNode;
}

interface DirectionSortContainerStyleType {
    direction: string;
}

const SortContainer = styled.div<DirectionSortContainerStyleType>`
    display: flex;
    justify-content: ${props => props.direction};
  
    padding: 0 20px;
`;

const DirectionSortContainer = ({ className, direction, children }: DirectionSortContainerType) => {

    const directionValue = direction === "right" ? "right" : "left";

    return (
        <SortContainer direction={directionValue}>
            {children}
        </SortContainer>
    )
}

export { DirectionSortContainer };