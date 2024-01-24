import { useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ScrollTextContainer = styled.div`
  position: fixed;
  top: 35vh;
  overflow: hidden;
  width: 100%;
`;

const StyledHeroScrollText = styled(motion.h1)`
  font-size: 16rem;
  font-weight: 700;
  line-height: 14rem;
  color: var(--color-brand);
  mix-blend-mode: normal;
  text-transform: uppercase;
  white-space: nowrap;

  transition: all 2s cubic-bezier(0.165, 0.84, 0.44, 1);
  text-align: ${(props) => (props.alignRight ? 'right' : 'left')};
`;

function HeroScrollText() {
  // const docWidth = document.documentElement.clientWidth;
  const { scrollYProgress } = useScroll();
  const x1 = useTransform(scrollYProgress, [0, 0.55], [0, 1000]);
  const x2 = useTransform(scrollYProgress, [0, 0.55], [0, -1000]);

  return (
    <ScrollTextContainer>
      <StyledHeroScrollText style={{ x: x1 }}>
        Extreme tires
      </StyledHeroScrollText>
      <StyledHeroScrollText style={{ x: x2 }} alignRight>
        Fast adventures
      </StyledHeroScrollText>
    </ScrollTextContainer>
  );
}

export default HeroScrollText;
