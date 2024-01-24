import { motion } from 'framer-motion';
import styled from 'styled-components';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 400,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const RevealTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 35vh;
  width: 100%;
  z-index: 1;
  padding: 2rem;
`;

const HeroText = styled(motion.h1)`
  font-size: 16rem;
  font-weight: 700;
  color: var(--color-brand);
  text-transform: uppercase;
  transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
`;

const HeroTextCall = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-brand);
  text-transform: uppercase;
  transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
`;

function HeroRevealText() {
  return (
    <RevealTextContainer>
      <HeroText
        variants={fadeInAnimationVariants}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true }}
      >
        Strada
      </HeroText>
      <HeroTextCall
        variants={fadeInAnimationVariants}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true }}
      >
        Learn more
      </HeroTextCall>
      <HeroTextCall
        variants={fadeInAnimationVariants}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true }}
      >
        Configure
      </HeroTextCall>
    </RevealTextContainer>
  );
}

export default HeroRevealText;
