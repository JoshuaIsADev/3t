import styled from 'styled-components';
import { motion } from 'framer-motion';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  width: 100vw;
  margin: 0 auto;
  top: 2vh;
  left: 1vw;
  z-index: 100;
`;

const Img = styled(motion.img)`
  width: 100px;
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
