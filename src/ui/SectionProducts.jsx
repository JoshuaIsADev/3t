import styled from 'styled-components';
import { ProductSwiper } from './ProductSwiper';
import Heading from './Heading';

const StyledSectionProducts = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: var(--width-max);
  margin: 0 auto;
  padding: 8rem 0 0;
`;

// var(--padding-sides)

const HeadingContainer = styled.div`
  width: 100%;
  padding: 0 var(--padding-sides);
  padding-bottom: 3rem;
`;

const SubheadingContainer = styled.div`
  width: 100%;
  max-width: var(--width-text-max);
  padding: 0 var(--padding-sides);
  padding-bottom: 2rem;
`;

const ParagraphContainer = styled.div`
  width: 100%;
  max-width: var(--width-text-max);
  padding: 0 var(--padding-sides);
  padding-bottom: 2rem;
`;

const ProductCardContainer = styled.article`
  margin-right: 0rem;
`;

function SectionProducts({ name, products }) {
  // console.log(products.slice(1));
  return (
    <StyledSectionProducts>
      <HeadingContainer>
        <Heading as='h2'>{products[0].heading}</Heading>
      </HeadingContainer>
      <SubheadingContainer>
        <p>{products[0].paragraph}</p>
      </SubheadingContainer>
      <ParagraphContainer>
        <Heading as='h5'>Choose your {name}</Heading>
      </ParagraphContainer>
      <ProductCardContainer>
        <ProductSwiper products={products.slice(1)} />
      </ProductCardContainer>
    </StyledSectionProducts>
  );
}

export default SectionProducts;
