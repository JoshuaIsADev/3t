import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Img = styled(motion.img)`
  height: 2rem;
  object-fit: contain;
  /* mix-blend-mode: multiply; */
`;

function Logo() {
  return (
    <>
      <NavLink to='/home'>
        <Img
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ type: 'ease', delay: 1.25, duration: 1 }}
          src='/3tlogo.svg'
          alt='logo'
        />
      </NavLink>
    </>
  );
}

export default Logo;
