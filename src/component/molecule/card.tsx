import styled from "styled-components";
import Image from "next/image";

interface CardType {
    className?: string;
    imageSrc: string;
    headerText: string;
}

const CardStyle = styled.div`
  border: 1px solid black;
  width: 150px;
  height: 200px;
  display: inline-block;
  
  margin: 20px;
  
  white-space: nowrap;
  overflow: hidden;
  
  text-align: center;
  
`;

const Card = ({className, imageSrc, headerText}: CardType) => {

    const imageUrl: string = `https://image.tmdb.org/t/p/w150/${imageSrc}`

    return (
        <CardStyle className={className}>
            <Image src={imageUrl} alt={headerText} fill={true} />
            <h4>{headerText}</h4>
        </CardStyle>
    );
};

export {Card};