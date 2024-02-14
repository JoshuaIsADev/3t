import styled from 'styled-components';
import StyledLink from './StyledLink';
import { Column, Column1, Column2, Column3, Column4 } from './Columns';

const StyledProductCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: min-content 1fr;
`;

const ImgContainer = styled(Column)`
  grid-column: 1 / span 4;
  grid-row: 2 / span 1;
  max-height: calc(100vh - 200px);
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--color-line);
`;

const Img = styled.img`
  max-height: 100%;
  width: 100%;
  object-fit: contain;
  padding-top: 4vh;
`;

function ProductCard({ name, headline, price, link, image }) {
  return (
    <StyledProductCard>
      <Column1>
        <p>{name}</p>
      </Column1>
      <Column2>
        <p>{headline}</p>
      </Column2>
      <Column3>
        <p>from {price} €</p>
      </Column3>
      <Column4 $variation='highlight'>
        <p>
          <StyledLink to={`/${link}`}>Configure</StyledLink>
        </p>
      </Column4>
      <ImgContainer>
        <Img src={image}></Img>
      </ImgContainer>
    </StyledProductCard>
  );
}

export default ProductCard;
