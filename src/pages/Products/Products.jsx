import { useSearchParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import products from '../../data/products';
import './Products.css';

function Products() {
  const [searchParams] = useSearchParams();

  const categoria = searchParams.get('categoria');
  const busca = searchParams.get('busca') || '';

  const filteredProducts = products.filter((product) => {
    const matchesCategory = !categoria || product.category === categoria;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(busca.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className='products-page'>
      <div className='products-top'>
        <h1>{categoria || 'Todos os produtos'}</h1>

        <span>
          {filteredProducts.length}{' '}
          {filteredProducts.length === 1 ? 'produto' : 'produtos'}
        </span>
      </div>

      <div className='products-grid'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className='no-products'>
            <h2>Nenhum produto encontrado</h2>

            <p>Tente pesquisar outro produto.</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default Products;
