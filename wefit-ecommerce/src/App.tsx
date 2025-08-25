import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Success from './pages/Success';
import styled from 'styled-components';

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`;

function App() {
  return (
    <Router>
      <CartProvider>
        <GlobalStyles />
        <AppWrapper>
          <Header />
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/success" element={<Success />} />
            </Routes>
          </MainContent>
        </AppWrapper>
      </CartProvider>
    </Router>
  );
}

export default App;
