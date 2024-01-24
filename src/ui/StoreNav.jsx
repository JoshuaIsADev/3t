import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledStoreNav = styled(motion.nav)`
  display: flex;
  justify-content: flex-start;
  position: fixed;
  padding: 0 2rem 0 0;
  top: 2rem;
  right: 0;
  z-index: 1;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  width: 30vw;
`;

const StyledLi = styled.li`
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--color-brand);
  transition: all 2s cubic-bezier(0.165, 0.84, 0.44, 1);
`;

function StoreNav() {
  return (
    <StyledStoreNav
      initial={{ translateY: -100 }}
      animate={{ translateY: 0 }}
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
