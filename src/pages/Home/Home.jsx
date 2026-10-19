import './Home.css';
import Banner from '../../components/Banner/Banner';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import ProductCard from '../../components/ProductCard/ProductCard';
import products from '../../data/products';

function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <main className='home'>
      <Banner />

      <section className='categories-section'>
        <h2>Categorias</h2>

        <div className='categories-grid'>
          <CategoryCard title='Notebooks' />
          <CategoryCard title='Smartphones' />
          <CategoryCard title='Monitores' />
          <CategoryCard title='Periféricos' />
        </div>
      </section>

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
