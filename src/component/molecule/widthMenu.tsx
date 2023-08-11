import styled from "styled-components";
import React from "react";

const WidthMenuStyle = styled.ul`
    display: flex;
    list-style: none;
`;

const MenuItemStyle = styled.li`
    margin-right: 10px;
    color: gray;
`;

interface WidthMenuType {
    className?: string;
    itemArray: Array<string>;
}

const WidthMenu = ({ className, itemArray }: WidthMenuType) => {

    return (
        <WidthMenuStyle className={className}>
            {itemArray.map((item, index) => {
                return (
                    <MenuItemStyle key={index}>{item}</MenuItemStyle>
                )
            })}
        </WidthMenuStyle>
    );
};

export { WidthMenu }