import styled from 'styled-components';
import Logo from './Logo';
import ProductNav from './ProductNav';
import StoreNav from './StoreNav';

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  margin: 0 auto;
  z-index: 100;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <ProductNav />
      <StoreNav />
    </StyledHeader>
  );
}

export default Header;
