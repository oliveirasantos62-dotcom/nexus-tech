import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  }

  return (
    <BrowserRouter>
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/produtos' element={<Products />} />

          <Route
            path='/produto/:id'
            element={<Product cart={cart} setCart={setCart} />}
          />

          <Route
            path='/carrinho'
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
