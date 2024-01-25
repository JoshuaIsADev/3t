import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledProductNav = styled(motion.aside)`
  display: flex;
  justify-content: flex-start;
  z-index: 99;
  position: fixed;
  padding: 0 2rem 0 0;
  bottom: 2rem;
  right: 0;
  transition: all 2s cubic-bezier(0.165, 0.84, 0.44, 1);
  /* background-color: var(--brand-color); */
  /* background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px); */
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
`;

function ProductNav() {
  return (
    <StyledProductNav
      initial={{ translateY: 100 }}
      animate={{ translateY: 0 }}
      transition={{ type: 'spring', delay: 0.5, duration: 0.6 }}
    >
      <nav>
        <StyledUl>
          <StyledLi>Strada</StyledLi>
          <StyledLi>Exploro</StyledLi>
        </StyledUl>
      </nav>
    </StyledProductNav>
  );
}

export default ProductNav;
