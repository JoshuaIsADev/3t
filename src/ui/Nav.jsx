import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavToggle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  right: 0;
  width: 800px;
  height: 5rem;
  background-color: var(--color-grey-0);
  z-index: 1;
  border-left: 1px solid var(--color-grey-900);
  padding: 2rem;
  gap: 2rem;
`;
const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  right: 0;
  width: 800px;
  height: calc(100vh - 5rem);
  top: 5rem;
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

const LiTitle = styled.li`
  font-size: 1rem;
  text-transform: uppercase;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    font-size: 8rem;
    text-transform: uppercase;
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 1rem;
    cursor: pointer;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-500);
  }
`;

function Nav() {
  return (
    <>
      <StyledNavToggle>
        <OpenCloseContainer>
          <OpenMenu>Open</OpenMenu>
          <CloseMenu>X</CloseMenu>
        </OpenCloseContainer>
      </StyledNavToggle>
      <StyledNav>
        <LinksContainer>
          <LiTitle>Bicycles</LiTitle>
          <li>
            <StyledNavLink to='/exploro' classname='underline'>
              Exploro
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to='/strada'>Strada</StyledNavLink>
          </li>
        </LinksContainer>

        <LinksContainer>
          <LiTitle>Info</LiTitle>
          <li>
            <StyledNavLink to='/about'>About</StyledNavLink>
          </li>
        </LinksContainer>

        <LinksContainer>
          <LiTitle>Shop</LiTitle>
          <li>
            <StyledNavLink to='/login'>Login</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to='/cart'>Cart</StyledNavLink>
          </li>
        </LinksContainer>
      </StyledNav>
    </>
  );
}

export default Nav;
