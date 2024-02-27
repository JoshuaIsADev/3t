import styled from 'styled-components';
import Column from './Column';
import ProductCard from './ProductCard';
import Row from './Row';
import Section from './Section';
import ArticleHeader from './ArticleHeader';
import { ProductSwiper } from './ProductSwiper';

function SectionProducts({ products }) {
  // console.log(products.slice(1));
  return (
    <Section>
      <ArticleHeader
        heading={products[0].heading}
        paragraph={products[0].paragraph}
      />
      <article>
        <Row>
          <ProductSwiper products={products.slice(1)} />
        </Row>
      </article>
    </Section>
  );
}

export default SectionProducts;
