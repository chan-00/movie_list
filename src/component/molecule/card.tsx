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
  
  margin: 25px;
  
  text-align: center;
  
  > div {
    width: 150px;
    height: 150px;
    position: relative;
  }
  
  > h4 {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

const Card = ({className, imageSrc, headerText}: CardType) => {

    return (
        <CardStyle className={className}>
            <div>
                <Image src={imageSrc} alt={headerText} fill={true} />
            </div>
            <h4>{headerText}</h4>
        </CardStyle>
    );
};

export {Card};