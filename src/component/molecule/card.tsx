import styled from "styled-components";

interface CardType {
    className?: string;
    imageSrc: string;
    headerText: string;
    commentText: string;
}

const CardStyle = styled.div`
  border: 1px solid black;
  
  >img {
    width: 100%;
    height: 50%;
  }
  
`;

const Card = ({className, imageSrc, headerText, commentText}: CardType) => {

    return (
        <CardStyle className={className}>
            <img src={imageSrc} alt={headerText} />
            <h3>{headerText}</h3>
            <p>{commentText}</p>
        </CardStyle>
    );
};

export {Card};