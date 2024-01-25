import styled from 'styled-components';
import { motion } from 'framer-motion';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  margin: 0 auto;
  top: 1rem;
  left: 1rem;
  z-index: 1;
`;

const Img = styled(motion.img)`
  width: 50px;
  object-fit: contain;
`;

function Logo() {
  return (
    <LogoContainer>
      <Img
        animate={{ translateY: 0 }}
        initial={{ translateY: -300 }}
        transition={{ type: 'spring', delay: 0.2, duration: 1 }}
        src='/3tlogored.png'
        alt='logo'
      />
    </LogoContainer>
  );
}

export default Logo;
