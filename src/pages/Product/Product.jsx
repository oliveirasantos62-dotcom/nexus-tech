import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../../data/products';
import './Product.css';

function Product({ cart, setCart }) {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <main className='product-not-found'>
        <h1>Produto não encontrado</h1>
        <Link to='/produtos'>Voltar para produtos</Link>
      </main>
    );
  }

  function addToCart() {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item,
        ),
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity,
        },
      ]);
    }
  }

  function increaseQuantity() {
    setQuantity((current) => current + 1);
  }

  function decreaseQuantity() {
    setQuantity((current) => (current > 1 ? current - 1 : 1));
  }

  return (
    <main className='product-page'>
      <div className='product-breadcrumb'>
        <Link to='/'>Início</Link>
        <span>/</span>
        <Link
          to={`/produtos?categoria=${encodeURIComponent(product.category)}`}
        >
          {product.category}
        </Link>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      <section className='product-detail'>
        <div className='product-detail-image'>
          <img src={product.image} alt={product.name} />
        </div>

        <div className='product-detail-info'>
          <span className='product-detail-category'>{product.category}</span>

          <h1>{product.name}</h1>

          <p className='product-detail-description'>
            Tecnologia de alta qualidade para melhorar seu setup e proporcionar
            uma experiência completa.
          </p>

          <div className='product-detail-price'>
            R$ {product.price.toFixed(2).replace('.', ',')}
          </div>

          <p className='product-installment'>À vista ou em até 10x sem juros</p>

          <div className='product-purchase'>
            <div className='quantity-selector'>
              <button onClick={decreaseQuantity}>−</button>
              <span>{quantity}</span>
              <button onClick={increaseQuantity}>+</button>
            </div>

            <button className='add-cart-button' onClick={addToCart}>
              Adicionar ao carrinho
            </button>
          </div>

          <div className='product-benefits'>
            <div>
              <strong>Compra segura</strong>
              <span>Pagamento protegido</span>
            </div>

            <div>
              <strong>Entrega rápida</strong>
              <span>Envio para todo o Brasil</span>
            </div>

            <div>
              <strong>Garantia Nexus</strong>
              <span>Produto com garantia</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Product;
