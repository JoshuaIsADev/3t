import styled from 'styled-components';
import Button from './Button';

const StyledProductNav = styled.aside`
  display: flex;
  justify-content: flex-end;
  width: 300px;
  background-color: var(--brand-color);
  z-index: 99;
  padding: 0.5rem;
  position: fixed;
  top: 100px;
  left: 0;
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
    <StyledProductNav>
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
