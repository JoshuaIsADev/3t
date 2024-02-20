import styled from 'styled-components';
import Logo from './Logo';
import Row from './Row';
import Column from './Column';
import { NavLink } from 'react-router-dom';
// import ProductNav from './ProductNav';
// import StoreNav from './StoreNav';

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  padding: 1rem;
  z-index: 100;
  position: fixed;
`;

const Ul = styled.ul`
  gap: 2rem;
  display: flex;
  flex-direction: row;
`;

function Header() {
  return (
    <StyledHeader>
      <Column $variation='left'>
        <Ul>
          <li>
            <NavLink to='/exploro'>Exploro</NavLink>
          </li>
          <li>
            <NavLink to='/strada'>Strada</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
        </Ul>
      </Column>
      <Column>
        <Logo />
      </Column>
      <Column $variation='right'>
        <Ul>
          <li>
            <NavLink to='/login'>Login</NavLink>
          </li>
          <li>
            <NavLink to='/cart'>Cart</NavLink>
          </li>
        </Ul>
      </Column>
    </StyledHeader>
  );
}

export default Header;
