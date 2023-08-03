import styled from "styled-components";
import Image from "next/image";

interface ImageContainerType {
    className?: string;
    src: string;
    alt: string;
    width: string;
    height: string;
}

interface ImageContainerStyleType {
    width: string;
    height: string;
}

const ImageContainerStyle = styled.div<ImageContainerStyleType>`
    width: ${props => props.width};
    height: ${props => props.height};
    position: relative;
`;

const ImageContainer = ({ className, src, alt, width, height }: ImageContainerType) => {

    return (
        <ImageContainerStyle width={width} height={height} className={className}>
            <Image src={src} alt={alt} fill={true} />
        </ImageContainerStyle>
    )
}

export { ImageContainer };