import styled from 'styled-components';
import ProductCard from './ProductCard';
import Row from './Row';
import HeroHeading from './HeroHeading';

const StyledProductCard = styled.section`
  display: flex;
  width: 100vw;
`;

function SectionProductCards(id, heading, subheading) {
  return (
    <StyledProductCard id={id}>
      {/* <HeroHeading heading={heading} subheading={subheading} /> */}
      <Row>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
    </StyledProductCard>
  );
}
export default SectionProductCards;
