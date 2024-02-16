import styled from 'styled-components';
import { Col, Column } from './Columns';

const Img = styled.img`
  width: 100%;
  height: 100%;
  padding: 0 0 0;
  object-fit: cover;
`;

const StyledImgCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  height: 100%;
  padding: 0;
`;

function ImgCard({ image }) {
  return (
    <StyledImgCard>
      {image.map((image, i) => (
        <Col $col='3' $span='2' $variation='images' key={i}>
          <Img src={image}></Img>
        </Col>
      ))}
    </StyledImgCard>
  );
}

export default ImgCard;
