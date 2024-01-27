import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

const variations = {
  open: css`
    transform: translateX(0px);
  `,
};

const StyledNavToggle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  right: 0;
  width: 50vw;
  height: 5rem;
  background-color: var(--color-grey-0);
  z-index: 1;
  border-left: 1px solid var(--color-grey-900);
  padding: 2rem;
  gap: 2rem;
  transform: translateX(calc(50vw - 120px));
  ${(props) => variations[props.$variation]}
  transition: all .5s cubic-bezier(0.165, 0.84, 0.44, 1);
`;
const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  right: 0;
  width: 50vw;
  height: calc(100vh - 5rem);
  top: 5rem;
  background-color: var(--color-grey-0);
  z-index: 1;
  border-left: 1px solid var(--color-grey-900);
  padding: 2rem;
  gap: 2rem;
  transform: translateX(calc(50vw - 120px));
  ${(props) => variations[props.$variation]}
  transition: all .5s cubic-bezier(0.165, 0.84, 0.44, 1);
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

const LinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const LiTitle = styled.li`
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 0;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    font-size: 7rem;
    text-transform: uppercase;
    text-decoration: underline;
    font-weight: 500;
    line-height: 7rem;
    text-decoration-thickness: 3px;
    text-underline-offset: 1rem;

    cursor: ${(props) => (props.disabled ? 'pointer' : 'default')};
    pointer-events: ${(props) => (props.disabled ? 'auto' : 'none')};
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-500);
  }
`;

function Nav() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const toggleNavVisibility = () => setNavVisibility((nav) => !nav);

  return (
    <>
      <StyledNavToggle $variation={isNavVisible ? 'open' : ''}>
        <OpenCloseContainer>
          <OpenMenu onClick={toggleNavVisibility}>
            {isNavVisible ? <SlArrowRight /> : <SlArrowLeft />}
          </OpenMenu>
        </OpenCloseContainer>
      </StyledNavToggle>
      <StyledNav
        $variation={isNavVisible ? 'open' : ''}
        onClick={toggleNavVisibility}
      >
        <LinksContainer>
          <LiTitle>Bicycles</LiTitle>
          <li>
            <StyledNavLink to='/exploro' disabled={isNavVisible}>
              Exploro
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to='/strada' disabled={isNavVisible}>
              Strada
            </StyledNavLink>
          </li>
        </LinksContainer>

        <LinksContainer>
          <LiTitle>Info</LiTitle>
          <li>
            <StyledNavLink to='/about' disabled={isNavVisible}>
              About
            </StyledNavLink>
          </li>
        </LinksContainer>

        <LinksContainer>
          <LiTitle>Shop</LiTitle>
          <li>
            <StyledNavLink to='/login' disabled={isNavVisible}>
              Login
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to='/cart' disabled={isNavVisible}>
              Cart
            </StyledNavLink>
          </li>
        </LinksContainer>
      </StyledNav>
    </>
  );
}

export default Nav;
