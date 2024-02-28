import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import Section from './Section';
import Row from './Row';
import ArticleHeader from './ArticleHeader';
import Heading from './Heading';

const StyledSectionHighlight = styled.section`
  width: 100%;
  max-width: var(--width-max);
  height: 200vh;
  margin: 0 auto;
  padding: 6rem var(--padding-sides) 2rem;
`;

const HighlightCard = styled.article`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  width: 100%;
  height: calc(100vh - 10rem);
  padding-top: 2rem;
  position: sticky;
  top: 10vh;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100%;
  max-width: var(--width-text-max);
`;

const HeadingContainer = styled.div`
  width: 100%;
  overflow-wrap: break-word;
  padding-bottom: 0rem;
  overflow-wrap: break-word;
  overflow-wrap: anywhere;
  word-break: normal;
`;

const SubheadingContainer = styled.div`
  width: 100%;
  padding-bottom: 2rem;
`;

const ParagraphContainer = styled.div`
  width: 100%;
  /* padding-bottom: 2rem; */
`;

const ImgContainer = styled.div`
  width: 100%;
  min-width: 700px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left;
  border-radius: 2rem;
`;

function SectionHighlight({ highlight }) {
  return (
    <StyledSectionHighlight>
      <HighlightCard>
        <InfoContainer>
          <HeadingContainer>
            <Heading as='h2'>{highlight.heading}</Heading>
          </HeadingContainer>
          <ParagraphContainer>
            <SubheadingContainer>
              <Heading as='h5'>Highlight 1 / 3</Heading>
            </SubheadingContainer>
            <p>{highlight.paragraph}</p>
          </ParagraphContainer>
        </InfoContainer>
        <ImgContainer>
          <Img src={highlight.image} />
        </ImgContainer>
      </HighlightCard>
    </StyledSectionHighlight>
  );
}

export default SectionHighlight;
