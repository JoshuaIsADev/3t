import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  right: 0;
  width: 800px;
  height: 100vh;
  background-color: var(--color-grey-0);
  z-index: 1;
  border-left: 1px solid var(--color-grey-900);
  padding: 2rem;
  gap: 2rem;
`;

const OpenCloseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const OpenMenu = styled.div`
  position: relative;
  top: 0;
  left: 0;
  cursor: pointer;
`;

const CloseMenu = styled.div`
  position: relative;
  top: 0;
  right: 0;
  cursor: pointer;
`;

const LinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Li = styled.li`
  font-size: 8rem;
  text-transform: uppercase;
`;
const LiTitle = styled.li`
  font-size: 1rem;
  text-transform: uppercase;
`;

function Nav() {
  return (
    <StyledNav>
      <OpenCloseContainer>
        <OpenMenu>Open</OpenMenu>
        <CloseMenu>X</CloseMenu>
      </OpenCloseContainer>

      <LinksContainer>
        <LiTitle>Bicycles</LiTitle>
        <Li>Exploro</Li>
        <Li>Strada</Li>
      </LinksContainer>

      <LinksContainer>
        <LiTitle>Info</LiTitle>
        <Li>About</Li>
      </LinksContainer>

      <LinksContainer>
        <LiTitle>Shop</LiTitle>
        <Li>Login</Li>
        <Li>Cart</Li>
      </LinksContainer>
    </StyledNav>
  );
}

export default Nav;
