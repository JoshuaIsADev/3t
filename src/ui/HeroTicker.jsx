import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledTicker = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  border-radius: 2rem;
  color: var(--color-grey-0);
  background-color: var(--color-grey-900);
  padding: 0 2rem 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  max-width: 400px;
`;

function HeroTicker({ text }) {
  return (
    <StyledTicker>
      <motion.p
        animate={{ x: -2000 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        }}
      >
        {text} {text} {text} {text} {text}
      </motion.p>
    </StyledTicker>
  );
}

export default HeroTicker;
