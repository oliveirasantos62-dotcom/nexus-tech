import { useState } from 'react';

import products from '../../data/products';
import ProductCard from '../../components/ProductCard/ProductCard';

import './Products.css';

function Products() {
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className='products-page'>
      <section className='products-header'>
        <h1>Produtos</h1>

        <p>Encontre a tecnologia ideal para você.</p>
      </section>

      <section className='products-content'>
        <div className='products-toolbar'>
          <input
            type='text'
            placeholder='Buscar produto...'
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <button>Filtrar</button>

          <button>Ordenar</button>
        </div>

        <div className='products-grid'>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className='no-products'>Nenhum produto encontrado.</p>
        )}
      </section>
    </div>
  );
}

export default Products;
