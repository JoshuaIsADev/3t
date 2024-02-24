import styled from 'styled-components';
import Logo from './Logo';
import Row from './Row';
import Column from './Column';
import { NavLink } from 'react-router-dom';
import { Button } from './Button';
import StyledLink from './StyledLink';
// import ProductNav from './ProductNav';
// import StoreNav from './StoreNav';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem;
  z-index: 100;
  position: fixed;
`;

const Ul = styled.ul`
  gap: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <nav>
        <Ul>
          <li>
            <StyledLink to='/exploro' $variation='header'>
              Exploro
            </StyledLink>
          </li>
          <li>
            <StyledLink to='/strada' $variation='header'>
              Strada
            </StyledLink>
          </li>
          <li>
            <StyledLink to='/about' $variation='header'>
              About
            </StyledLink>
          </li>
          <li>
            <StyledLink to='/login' $variation='header'>
              Login
            </StyledLink>
          </li>
          <li>
            <StyledLink to='/cart' $variation='header'>
              Cart
            </StyledLink>
          </li>
        </Ul>
      </nav>
    </StyledHeader>
  );
}

export default Header;
