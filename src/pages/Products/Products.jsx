import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import products from '../../data/products';
import './Products.css';

function Products() {
  const [searchParams] = useSearchParams();

  const categoria = searchParams.get('categoria');

  const [search, setSearch] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesCategory = !categoria || product.category === categoria;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className='products-page'>
      <h1>Produtos</h1>

      <p>Encontre o produto ideal para você.</p>

      <input
        type='text'
        className='products-search'
        placeholder='Buscar produto...'
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      {categoria && (
        <p>
          Categoria: <strong>{categoria}</strong>
        </p>
      )}

      <div className='products-grid'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className='no-products'>Nenhum produto encontrado.</p>
        )}
      </div>
    </main>
  );
}

export default Products;
