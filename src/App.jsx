import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
// import Heading from './ui/Heading';
import Header from './ui/Header';
import Home from './pages/Home';

const StyledApp = styled.main`
  background-color: var(--background-color);
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <StyledApp>
        <Home />
      </StyledApp>
    </>
  );
}
export default App;
