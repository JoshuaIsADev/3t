import styled from 'styled-components';
import Column from './Column';
import StyledLink from './StyledLink';
import Section from './Section';
import Row from './Row';
import Heading from './Heading';
import InfoContainer from './InfoContainer';

const ProductCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4 1fr);
  grid-template-rows: min-content 1fr;
`;

const NameContainer = styled.div`
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  border-right: 1px solid var(--color-grey-100);
  padding: 0.5rem 1rem;
`;

const HeadlineContainer = styled.div`
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
  border-right: 1px solid var(--color-grey-100);
  padding: 0.5rem 1rem;
`;

const PriceContainer = styled.div`
  grid-column: 3 / span 1;
  grid-row: 1 / span 1;
  border-right: 1px solid var(--color-grey-100);
  padding: 0.5rem 1rem;
`;

const ConfigureContainer = styled.div`
  grid-column: 4 / span 1;
  grid-row: 1 / span 1;
  padding: 0.5rem 1rem;
  background-color: var(--color-brand);
`;

const ImgContainer = styled.div`
  grid-column: 1 / span 4;
  grid-row: 2 / span 1;
  max-height: calc(100vh - 200px);
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--color-grey-100);
  padding: 0.5rem 1rem;
`;

const Img = styled.img`
  max-height: 100%;
  width: 100%;
  object-fit: contain;
  padding-top: 10vh;
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

      {/* <Row $gridTemplateRows='50px 1fr'>
        <Column $gridColumn='span 1'>
          <p>{name}</p>
        </Column>
        <Column
          $gridColumn='span 1'
          $borderLeft='1px solid var(--color-grey-100)'
        >
          <p>{headline}</p>
        </Column>
        <Column
          $gridColumn='span 1'
          $borderLeft='1px solid var(--color-grey-100)'
        >
          <p>from {price} €</p>
        </Column>
        <Column
          $gridColumn='span 1'
          $borderLeft='1px solid var(--color-grey-100)'
          $backgroundColor='var(--color-brand)'
        >
          <p>
            <StyledLink to={`/${link}`}>Configure</StyledLink>
          </p>
        </Column>
        <Column $gridColumn='2 / span 2'>
          <Img src={image}></Img>
        </Column>
      </Row> */}
    </ProductCardContainer>
  );
}

export default ProductCard;
