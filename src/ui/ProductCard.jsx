import styled from 'styled-components';
import StyledLink from './StyledLink';

const ProductCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: min-content 1fr;
`;

const Container = styled.div`
  padding: 0.5rem 1rem;
  border-right: 1px solid var(--color-grey-100);

  &:nth-child(4n) {
    background-color: var(--color-brand);
  }
`;

const NameContainer = styled(Container)`
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
`;

const HeadlineContainer = styled(Container)`
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
`;

const PriceContainer = styled(Container)`
  grid-column: 3 / span 1;
  grid-row: 1 / span 1;
`;

const ConfigureContainer = styled(Container)`
  grid-column: 4 / span 1;
  grid-row: 1 / span 1;
`;

const ImgContainer = styled(Container)`
  grid-column: 1 / span 4;
  grid-row: 2 / span 1;
  max-height: calc(100vh - 200px);
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--color-grey-100);
`;

const Img = styled.img`
  max-height: 100%;
  width: 100%;
  object-fit: contain;
  padding-top: 4vh;
`;

function ProductCard({ name, headline, price, link, image }) {
  return (
    <ProductCardContainer>
      <NameContainer>
        <p>{name}</p>
      </NameContainer>
      <HeadlineContainer>
        <p>{headline}</p>
      </HeadlineContainer>
      <PriceContainer>
        <p>from {price} €</p>
      </PriceContainer>
      <ConfigureContainer>
        <p>
          <StyledLink to={`/${link}`}>Configure</StyledLink>
        </p>
      </ConfigureContainer>
      <ImgContainer>
        <Img src={image}></Img>
      </ImgContainer>
    </ProductCardContainer>
  );
}

export default ProductCard;
