import styled from 'styled-components';

const StyledStoreNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 150px;
  height: 100px;
  background-color: var(--brand-color);
  z-index: 99;
  position: fixed;
  padding: 0.5rem;
  top: 0;
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
    <StyledStoreNav>
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
