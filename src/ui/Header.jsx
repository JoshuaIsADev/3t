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

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100lvw;
  margin: 0 auto;
  top: 2.5rem;
  z-index: 100;
`;

function Header() {
  return (
    <StyledHeader>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <ProductNav />
      <StoreNav />
    </StyledHeader>
  );
}

export default Header;
