import styled from "styled-components";

const TitleStyle = styled.h1`
    font-size: 20px;
`;

interface TitleType {
    className?: string;
    text: string|undefined;
}

const Title = ({ className, text }: TitleType) => {

    return (
        <TitleStyle className={className}>
            {text ? text : "Undefined"}
        </TitleStyle>
    );
}

export { Title };