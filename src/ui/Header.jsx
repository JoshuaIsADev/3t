import styled from 'styled-components';
import Logo from './Logo';
import StyledLink from './StyledLink';

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
            <StyledLink to='/signin' $variation='header'>
              Sign In
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
