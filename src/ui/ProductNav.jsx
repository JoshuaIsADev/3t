import styled from 'styled-components';
import Button from './Button';
import { motion } from 'framer-motion';

const StyledProductNav = styled(motion.aside)`
  display: flex;
  justify-content: flex-end;
  width: 400px;
  z-index: 99;
  padding: 0.5rem;
  position: fixed;
  top: 100px;
  left: 0;
  background-color: var(--brand-color);
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 2rem;
`;

const StyledUl = styled.ul`
  gap: 0.5rem;
  text-align: right;
  :first-child {
    padding-bottom: 1rem;
  }
`;

const StyledLi = styled.li`
  text-transform: uppercase;
  font-weight: 200;
  color: var(--color-grey-0);
`;

function ProductNav() {
  return (
    <StyledProductNav
      animate={{ translateX: -100 }}
      initial={{ translateX: -400 }}
      transition={{ type: 'spring', delay: 0.5, duration: 1 }}
    >
      <StyledNav>
        <StyledUl>
          <StyledLi>Products </StyledLi>
          <StyledLi>Strada</StyledLi>
          <StyledLi>Exploro</StyledLi>
        </StyledUl>
        <Button>+</Button>
      </StyledNav>
    </StyledProductNav>
  );
}

export default ProductNav;
