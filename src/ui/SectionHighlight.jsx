import styled, { css } from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import HighlightCard from './HighlightCard';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const variations = {
  slide1: css`
    height: 500vh;
  `,
};

const StyledSectionHighlight = styled(motion.section)`
  position: relative;
  width: 100%;
  max-width: var(--width-max);
  height: 200vh;
  margin: 0 auto;
  padding: 6rem var(--padding-sides) 2rem;
  ${(props) => variations[props.$variation]}
`;

const StyledHighlightCard = styled(motion.div)`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  width: 100%;
  padding-top: 8rem;
  position: sticky;
  /* position: fixed; */
  top: 0rem;
  height: calc(100vh - 2rem);
  /* padding: 8rem var(--padding-sides) 2rem; */
`;

function SectionHighlight({ highlights }) {
  const { ref: myRef, inView: cardVisible } = useInView();
  const { ref: myRef2, inView: cardVisible2 } = useInView();

  return (
    <>
      <StyledSectionHighlight ref={myRef} $variation='slide1'>
        <StyledHighlightCard
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, duration: 2 }}
          exit={{ opacity: 0, duration: 2 }}
        >
          <HighlightCard
            heading={highlights[0].heading}
            paragraph={highlights[0].paragraph}
            image={highlights[0].image}
          />
        </StyledHighlightCard>
      </StyledSectionHighlight>
      <StyledSectionHighlight ref={myRef2}>
        <StyledHighlightCard
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, duration: 2 }}
          exit={{ opacity: 0, duration: 2 }}
        >
          {cardVisible2 ? (
            <HighlightCard
              heading={highlights[1].heading}
              paragraph={highlights[1].paragraph}
              image={highlights[1].image}
            />
          ) : (
            ''
          )}
        </StyledHighlightCard>
      </StyledSectionHighlight>
    </>
  );
}

export default SectionHighlight;
