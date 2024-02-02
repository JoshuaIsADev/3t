import styled from 'styled-components';
import Img from './Img';

const StyledGallery = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  aspect-ratio: 6/3;
`;

function Gallery({ src }) {
  return (
    <StyledGallery>
      <Img src={src}></Img>
    </StyledGallery>
  );
}

export default Gallery;
