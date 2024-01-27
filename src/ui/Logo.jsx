import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  margin: 0 auto;
  top: 2rem;
  left: 2rem;
  z-index: 1;
`;

const Img = styled(motion.img)`
  width: 50px;
  object-fit: contain;
`;

function Logo() {
  return (
    <LogoContainer>
      <NavLink to='/home'>
        <Img
          animate={{ translateY: 0 }}
          initial={{ translateY: -300 }}
          transition={{ type: 'spring', delay: 0.2, duration: 1 }}
          src='/3tlogowhite.png'
          alt='logo'
        />
      </NavLink>
    </LogoContainer>
  );
}

export default Logo;
