import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  margin: 0 auto;
  top: 10rem;
  left: 2rem;
  z-index: 1;
  mix-blend-mode: multiply;
`;

const Img = styled(motion.img)`
  width: 300px;
  object-fit: contain;
  /* mix-blend-mode: multiply; */
`;

function Logo() {
  return (
    <LogoContainer>
      <NavLink to='/home'>
        <Img
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ type: 'ease', delay: 1, duration: 2 }}
          src='/3tlogo.svg'
          alt='logo'
        />
      </NavLink>
    </LogoContainer>
  );
}

export default Logo;
