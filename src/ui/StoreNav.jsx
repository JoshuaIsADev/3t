import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledStoreNav = styled(motion.nav)`
  display: flex;
  justify-content: flex-start;
  z-index: 99;
  position: fixed;
  padding: 0 1vw 0 0;
  top: 3vh;
  right: 0;
  /* background-color: var(--brand-color); */
  /* background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px); */
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  width: 35vw;
`;

const StyledLi = styled.li`
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--color-grey-900);
`;

function StoreNav() {
  return (
    <StyledStoreNav
      animate={{ translateY: 0 }}
      initial={{ translateY: -100 }}
      transition={{ type: 'spring', delay: 0.4, duration: 0.6 }}
    >
      <nav>
        <StyledUl>
          <StyledLi>Login</StyledLi>
          <StyledLi>Cart</StyledLi>
        </StyledUl>
      </nav>
    </StyledStoreNav>
  );
}

export default StoreNav;
