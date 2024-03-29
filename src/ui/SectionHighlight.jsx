import styled, { css } from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import HighlightCard from './HighlightCard';
import { useRef } from 'react';

const variations = {
  slide1: css`
    position: relative;
    height: 225vh;
  `,

  slide2: css`
    position: relative;
    height: 125vh;
  `,

  slide3: css`
    position: relative;
    height: 225vh;
  `,

  cardMiddle: css`
    position: fixed;
    padding: 8rem calc(2rem + var(--padding-sides)) 0rem 0rem;
  `,
};

const StyledSectionHighlight = styled(motion.section)`
  position: relative;
  width: 100%;
  max-width: var(--width-max);
  height: 200vh;
  margin: 0 auto;
  padding: 6rem var(--padding-sides) 2rem;
  z-index: -100;
  ${(props) => variations[props.$variation]}
`;

const StyledHighlightCard = styled(motion.div)`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  width: 100%;
  padding-top: 8rem;
  position: sticky;
  top: 0rem;
  height: calc(100vh - 2rem);
  ${(props) => variations[props.$variation]}
`;

function SectionHighlight({ highlights }) {
  const myRef = useRef();
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: myRef,
    offset: ['start start', 'end end'],
  });
  const opacity = useTransform(scrollYProgress1, [0, 0.8, 1], [1, 1, 0]);

  const myRef2 = useRef();
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: myRef2,
    offset: ['start end', 'end start'],
  });
  const opacity2 = useTransform(
    scrollYProgress2,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );
  const myRef3 = useRef();
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: myRef3,
    offset: ['start start', 'end end'],
  });
  const opacity3 = useTransform(
    scrollYProgress3,
    [0, 0.1, 0.3, 0.8, 1],
    [0, 0, 1, 1, 1]
  );

  return (
    <>
      <StyledSectionHighlight ref={myRef} $variation='slide1'>
        <StyledHighlightCard style={{ opacity }}>
          <HighlightCard
            highlight={highlights[0]}
            outOf={highlights.length - 1}
          />
        </StyledHighlightCard>
      </StyledSectionHighlight>
      <StyledSectionHighlight ref={myRef2} $variation='slide2'>
        <StyledHighlightCard
          style={{ opacity: opacity2 }}
          $variation='cardMiddle'
        >
          <HighlightCard
            highlight={highlights[1]}
            outOf={highlights.length - 1}
          />
        </StyledHighlightCard>
      </StyledSectionHighlight>
      <StyledSectionHighlight ref={myRef3} $variation='slide3'>
        <StyledHighlightCard style={{ opacity: opacity3 }}>
          <HighlightCard
            highlight={highlights[2]}
            outOf={highlights.length - 1}
          />
        </StyledHighlightCard>
      </StyledSectionHighlight>
    </>
  );
}

export default SectionHighlight;
