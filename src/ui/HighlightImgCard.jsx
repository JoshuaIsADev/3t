import styled from 'styled-components';
import { Column } from './Columns';

const Img = styled.img`
  width: 100%;
  height: 100%;
  padding: 0 0 0;
  object-fit: cover;
`;
const StyledHighlighImgCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  height: 100%;
  padding: 0;
`;

function HighlightImgCard({ images }) {
  return (
    <StyledHighlighImgCard>
      {images.map((image, i) => (
        <Column $variation='images' key={i}>
          <Img src={image}></Img>
        </Column>
      ))}
    </StyledHighlighImgCard>
  );
}

export default HighlightImgCard;
