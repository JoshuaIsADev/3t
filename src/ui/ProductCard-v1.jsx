import styled from 'styled-components';
import StyledLink from './StyledLink';
import { Col, Column } from './Columns';

const StyledProductCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: min-content 1fr;
`;

const ImgContainer = styled(Column)`
  grid-column: 1 / span 4;
  grid-row: 2 / span 1;
  max-height: calc(100vh - 240px);
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--color-line);
`;

const Img = styled.img`
  max-height: 90%;
  width: 100%;
  object-fit: contain;
  padding-top: 4vh;
`;

function ProductCard({ name, headline, price, link, image }) {
  return (
    <StyledProductCard>
      <Col $col='1' $span='1'>
        <p>{name}</p>
      </Col>
      <Col $col='2' $span='1'>
        <p>{headline}</p>
      </Col>
      <Col $col='3' $span='1'>
        <p>from {price} €</p>
      </Col>
      <Col $col='4' $span='1' $variation='highlight'>
        <p>
          <StyledLink to={`/${link}`}>Configure</StyledLink>
        </p>
      </Col>
      <ImgContainer>
        <Img src={image}></Img>
      </ImgContainer>
    </StyledProductCard>
  );
}

export default ProductCard;
