import Banner from '../../components/Banner/Banner';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import ProductCard from '../../components/ProductCard/ProductCard';

import './Home.css';

function Home() {
  return (
    <div className='home'>
      <Banner />

      <section className='home-section'>
        <h2>Categorias</h2>

        <div className='categories'>
          <CategoryCard title='Notebooks' />
          <CategoryCard title='Smartphones' />
          <CategoryCard title='Monitores' />
          <CategoryCard title='Periféricos' />
        </div>
      </section>

      <section className='home-section'>
        <h2>Produtos em destaque</h2>

        <div className='products-grid'>
          <ProductCard name='Notebook Nexus Pro' price='R$ 4.999,90' />

          <ProductCard name='Smartphone Nexus X' price='R$ 2.499,90' />

          <ProductCard name='Monitor Nexus 27' price='R$ 1.299,90' />

          <ProductCard name='Teclado Nexus RGB' price='R$ 299,90' />
        </div>
      </section>
    </div>
  );
}

export default Home;
