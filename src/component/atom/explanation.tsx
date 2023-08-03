import styled from "styled-components";

const ExplanationStyle = styled.p`
    font-size: 15px;
    color: gray;
`;

interface ExplanationType {
    className?: string;
    text: string|undefined;
}

const Explanation = ({ className, text }: ExplanationType) => {

    return (
        <ExplanationStyle className={className}>
            {text ? text : "Undefined"}
        </ExplanationStyle>
    );
}

export { Explanation };