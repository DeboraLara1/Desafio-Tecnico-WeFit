import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Success from './pages/Success';

function App() {
  return (
    <Router>
      <CartProvider>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
