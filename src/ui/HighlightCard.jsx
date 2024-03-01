import styled from 'styled-components';
import Heading from './Heading';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

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

function HighlightCard({ highlight, id, outOf }) {
  console.log(id);
  return (
    <>
      <InfoContainer>
        <HeadingContainer>
          <Heading as='h2'>{highlight.heading}</Heading>
        </HeadingContainer>
        <ParagraphContainer>
          <SubheadingContainer>
            <Heading as='h5'>
              Highlight {highlight.id} / {outOf}
            </Heading>
          </SubheadingContainer>
          <p>{highlight.paragraph}</p>
        </ParagraphContainer>
      </InfoContainer>
      <ImgContainer>
        <Img src={highlight.image} />
      </ImgContainer>
    </>
  );
}

export default HighlightCard;
