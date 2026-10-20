import './Home.css';
import Banner from '../../components/Banner/Banner';
import ProductCard from '../../components/ProductCard/ProductCard';
import products from '../../data/products';

function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <main className='home'>
      <Banner />

      <section className='products-section'>
        <h2>Produtos em destaque</h2>

        <div className='products-grid'>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
