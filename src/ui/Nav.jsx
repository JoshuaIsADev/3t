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
  right: 2.8rem;
  z-index: 20;
  padding: 1rem;
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
  width: 700px;
  height: calc(100vh);
  background-color: var(--color-grey-0);
  z-index: 10;
  border-left: 1px solid var(--background-color-grey);
  padding: 5rem 1rem 2rem;
  gap: 2rem;
  transform: translateX(calc(700px - 100px));
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
  height: 100%;
  justify-content: space-between;
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
    font-size: calc(20vh);
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 300;
    line-height: calc(5vh);
    cursor: ${(props) => (props.disabled ? 'pointer' : 'default')};
    pointer-events: ${(props) => (props.disabled ? 'auto' : 'none')};
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-brand);
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
          <li>
            <StyledNavLink to='/about' disabled={isNavVisible}>
              About
            </StyledNavLink>
          </li>
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
