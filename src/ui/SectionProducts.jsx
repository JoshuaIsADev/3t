import styled from 'styled-components';
import Column from './Column';
import ProductCard from './ProductCard';
import Row from './Row';
import Section from './Section';

const StyledArticle = styled.article`
  display: flex;
  gap: 4rem;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
  margin: 10rem 0 0;
`;

function SectionProducts({ products }) {
  return (
    <Section>
      <StyledArticle>
        <Column>
          <ProductCard product={products[0]} />
        </Column>

        <Column>
          <ProductCard product={products[1]} />
        </Column>

        <Column>
          <ProductCard product={products[2]} />
        </Column>
        <Column>
          <ProductCard product={products[3]} />
        </Column>
      </StyledArticle>
    </Section>
  );
}

export default SectionProducts;