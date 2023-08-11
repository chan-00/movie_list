import styled from "styled-components";

const TitleStyle = styled.h1`
    font-size: 20px;
`;

interface TitleType {
    className?: string;
    clickEventFunction?: () => void;
    text: string|undefined;
}

const Title = ({ className, clickEventFunction, text }: TitleType) => {

    return (
        <TitleStyle className={className} onClick={clickEventFunction}>
            {text ? text : "Undefined"}
        </TitleStyle>
    );
}

export { Title };