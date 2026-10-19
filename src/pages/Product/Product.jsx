import { useParams } from 'react-router-dom';

import products from '../../data/products';

import './Product.css';

function Product() {
  const { id } = useParams();

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return (
      <section className='product-not-found'>
        <h1>Produto não encontrado</h1>
        <p>O produto que você procura não existe.</p>
      </section>
    );
  }

  return (
    <main className='product-page'>
      <div className='product-detail'>
        <div className='product-detail-image'>{product.image}</div>

        <div className='product-detail-info'>
          <p className='product-detail-category'>{product.category}</p>

          <h1>{product.name}</h1>

          <p className='product-detail-price'>
            R$ {product.price.toFixed(2).replace('.', ',')}
          </p>

          <p className='product-detail-description'>
            Produto tecnológico de alta qualidade desenvolvido para oferecer
            desempenho, praticidade e excelente experiência.
          </p>

          <div className='product-quantity'>
            <button>-</button>

            <span>1</span>

            <button>+</button>
          </div>

          <button className='add-cart'>Adicionar ao carrinho</button>
        </div>
      </div>
    </main>
  );
}

export default Product;
