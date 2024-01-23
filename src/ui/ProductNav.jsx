import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledProductNav = styled(motion.aside)`
  display: flex;
  justify-content: flex-start;
  z-index: 99;
  position: fixed;
  padding: 0 1vw 0 0;
  bottom: 3vh;
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

function ProductNav() {
  return (
    <StyledProductNav
      animate={{ translateY: 0 }}
      initial={{ translateY: 100 }}
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
