import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/produtos' element={<Products />} />

          <Route path='/produto/:id' element={<Product />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
