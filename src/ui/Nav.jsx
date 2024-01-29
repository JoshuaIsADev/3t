import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

const variations = {
  open: css`
    transform: translateX(0px);
    /* @media (max-height: 450px) {
      transform: translateX(2rem);
    } */
  `,
};

const StyledNavToggle = styled.div`
  display: flex;
  justify-content: right;
  position: fixed;
  right: 1.5rem;
  z-index: 2;
  padding: 2rem;
  ${(props) => variations[props.$variation]}
  transition: all .5s cubic-bezier(0.165, 0.84, 0.44, 1);
  cursor: pointer;
  @media (max-height: 450px) {
    right: 3.7rem;
    padding: 1rem;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  right: 0;
  width: 30vw;
  height: calc(100vh);
  background-color: var(--color-grey-0);
  z-index: 1;
  border-left: 1px solid var(--color-grey-900);
  padding: 5rem 2rem 2rem;
  gap: 2rem;
  transform: translateX(calc(30vw - 120px));
  ${(props) => variations[props.$variation]}
  transition: all .5s cubic-bezier(0.165, 0.84, 0.44, 1);
  @media (max-height: 450px) {
    padding: 3rem 1rem 1rem;
    gap: 1rem;
    /* transform: translateX(calc(100vw)); */
    ${(props) => variations[props.$variation]}/* width: 100vw; */
  }
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
  @media (max-height: 400px) {
    font-size: 0.75rem;
    line-height: 0.5rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    font-size: calc(10vh);
    text-transform: uppercase;
    text-decoration: underline;
    font-weight: 500;
    line-height: calc(10vh);
    text-decoration-thickness: 3px;
    text-underline-offset: 0.5rem;

    cursor: ${(props) => (props.disabled ? 'pointer' : 'default')};
    pointer-events: ${(props) => (props.disabled ? 'auto' : 'none')};
    @media (max-height: 450px) {
      text-decoration-thickness: 2px;
      text-underline-offset: 0.2rem;
    }
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
      <StyledNavToggle onClick={toggleNavVisibility}>
        {isNavVisible ? <SlArrowRight /> : <SlArrowLeft />}
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
