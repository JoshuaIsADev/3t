import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Header from './Header';
import styled from 'styled-components';
import Footer from './Footer';

const Main = styled.main`
  background-color: none;
`;

function AppLayout() {
  return (
    <>
      <Header />
      <Nav />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default AppLayout;
