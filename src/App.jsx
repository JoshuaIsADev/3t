import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
// import Heading from './ui/Heading';
import Header from './ui/Header';
import Home from './pages/Home';
import Nav from './ui/Nav';

const StyledApp = styled.main`
  background-color: var(--background-color);
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Nav />
      <StyledApp>
        <Home />
      </StyledApp>
    </>
  );
}
export default App;
