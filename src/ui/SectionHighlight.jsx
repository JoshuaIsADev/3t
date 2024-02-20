import styled from 'styled-components';
import Section from './Section';
import Row from './Row';
import Column from './Column';
import Heading from './Heading';

const ImgContainer = styled.article`
  /* display: flex;
  flex-wrap: wrap; */
  position: relative;
  width: 100%;
`;

const Img1 = styled.img`
  max-width: 600px;
  padding-top: 25rem;
  padding-bottom: 0rem;
`;

const Img2 = styled.img`
  max-width: 1000px;
  padding-top: 5rem;
  padding-bottom: 15rem;
`;

const Img3 = styled.img`
  max-width: 800px;
  padding-top: 0rem;
  /* padding-bottom: 15rem; */
  padding-left: 5rem;
`;
const Img4 = styled.img`
  max-width: 800px;
  padding-top: 0rem;
  padding-bottom: 5rem;
  padding-right: 5rem;
`;

function SectionHighlight({ highlight }) {
  return (
    <Section>
      <article>
        <Row>
          <Column $variation='highlight'>
            <Heading as='h3'>{highlight.heading}</Heading>
            <p>{highlight.paragraph}</p>
            <Heading as='h6'>{highlight.subHeading}</Heading>
          </Column>
        </Row>
      </article>
      <Row>
        <Column>
          <Img1 src={highlight.image[0]} />
        </Column>
        <Column>
          <Img2 src={highlight.image[1]} />
        </Column>
      </Row>
      <Row>
        <Column>
          <Img3 src={highlight.image[2]} />
        </Column>
        <Column>
          <Img4 src={highlight.image[3]} />
        </Column>
      </Row>
    </Section>
  );
}

export default SectionHighlight;
