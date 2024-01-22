import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledStoreNav = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 150px;
  height: 150px;
  background-color: var(--brand-color);
  z-index: 99;
  position: fixed;
  padding: 0.5rem;
  top: -50px;
  right: 150px;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
`;

const StyledLi = styled.li`
  text-transform: uppercase;
  font-weight: 200;
  color: var(--color-grey-0);
`;

function StoreNav() {
  return (
    <StyledStoreNav
      animate={{ translateY: 0 }}
      initial={{ translateY: -100 }}
      transition={{ type: 'spring', delay: 0.5, duration: 1 }}
    >
      <nav>
        <StyledUl>
          <StyledLi>Account</StyledLi>
          <StyledLi>Cart</StyledLi>
        </StyledUl>
      </nav>
    </StyledStoreNav>
  );
}

export default StoreNav;
