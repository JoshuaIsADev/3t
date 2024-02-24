import styled from 'styled-components';
import Section from './Section';
import Row from './Row';
import Column from './Column';
import Heading from './Heading';
import ArticleHeader from './ArticleHeader';

const ImgContainer = styled.article`
  /* display: flex;
  flex-wrap: wrap; */
  position: relative;
  width: 100%;
`;

const Img1 = styled.img`
  width: 100%;
`;

const Img2 = styled.img`
  padding-right: 20vw;
`;

const Img3 = styled.img`
  padding-left: 30vw;
`;
const Img4 = styled.img`
  padding-right: 25vw;
`;

function SectionHighlight({ highlight }) {
  return (
    <Section>
      <ArticleHeader
        heading={highlight.heading}
        paragraph={highlight.paragraph}
      />
      <article>
        <Row $variation='right'>
          <Img1 src={highlight.image[0]} />
        </Row>
        <Row $variation='left'>
          <Img2 src={highlight.image[1]} />
        </Row>
        <Row $variation='right'>
          <Img3 src={highlight.image[2]} />
        </Row>
        <Row $variation='left'>
          <Img4 src={highlight.image[3]} />
        </Row>
      </article>
    </Section>
  );
}

export default SectionHighlight;
