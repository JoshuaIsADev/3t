import { useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ScrollTextContainer = styled.div`
  position: relative;
  top: 60vh;
  overflow: hidden;
`;

const StyledHeroScrollText = styled(motion.h1)`
  /* font-size: 10rem; */
  font-size: calc(3rem + 100vw / 18);
  font-weight: 700;
  color: var(--color-grey-900);
  text-transform: uppercase;
  white-space: nowrap;
  transition: all 2s cubic-bezier(0.165, 0.84, 0.44, 1);
`;

function HeroScrollText() {
  const { scrollYProgress } = useScroll();
  const docWidth = document.documentElement.clientWidth;
  const x = useTransform(scrollYProgress, [0, 0.55], [0, -docWidth * 0.9]);

  return (
    <ScrollTextContainer>
      <StyledHeroScrollText style={{ x }}>
        Extreme tires. Fast adventures. Extreme tires. Fast adventures. Extreme
        tires. Fast adventures.
      </StyledHeroScrollText>
    </ScrollTextContainer>
  );
}

export default HeroScrollText;
