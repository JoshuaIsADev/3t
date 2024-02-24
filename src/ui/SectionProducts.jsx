import styled from 'styled-components';
import Column from './Column';
import ProductCard from './ProductCard';
import Row from './Row';
import Section from './Section';
import ArticleHeader from './ArticleHeader';
import { ProductSwiper } from './ProductSwiper';

const StyledArticle = styled.article`
  display: flex;
  gap: 4rem;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
  margin: 10rem 0 0;
`;

function SectionProducts({ products }) {
  // console.log(products.slice(1));
  return (
    <Section>
      <ArticleHeader
        heading={products[0].heading}
        paragraph={products[0].paragraph}
      />
      <StyledArticle>
        {/* <Column>
          <ProductCard product={products[1]} />
        </Column>

        <Column>
          <ProductCard product={products[2]} />
        </Column>

        <Column>
          <ProductCard product={products[3]} />
        </Column>
        <Column>
          <ProductCard product={products[4]} />
        </Column> */}
      </StyledArticle>
      <ProductSwiper products={products.slice(1)} />
    </Section>
  );
}

export default SectionProducts;
