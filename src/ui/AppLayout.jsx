import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Header from './Header';
import styled from 'styled-components';

const Main = styled.main`
  background-color: var(--color-background);
`;

function AppLayout() {
  return (
    <div>
      <Header />
      <Nav />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
