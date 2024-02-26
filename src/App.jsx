import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
// import Heading from './ui/Heading';

import Home from './pages/Home';

import Strada from './pages/Strada';
import Exploro from './pages/Exploro';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Cart from './pages/Cart';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './ui/AppLayout';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to='home' />} />
            <Route path='home' element={<Home />} />
            <Route path='exploro' element={<Exploro />} />
            <Route path='strada' element={<Strada />} />
            <Route path='about' element={<About />} />
            <Route path='signin' element={<SignIn />} />
            <Route path='cart' element={<Cart />} />
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
