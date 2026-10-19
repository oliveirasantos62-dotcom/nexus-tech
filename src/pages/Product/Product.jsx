import { useParams } from 'react-router-dom';

import products from '../../data/products';

import './Product.css';

function Product({ cart, setCart }) {
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

  function addToCart() {
    const alreadyInCart = cart.some((item) => item.id === product.id);

    if (alreadyInCart) {
      return;
    }

    setCart([...cart, product]);
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

          <button className='add-cart' onClick={addToCart}>
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </main>
  );
}

export default Product;
