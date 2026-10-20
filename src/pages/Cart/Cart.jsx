import { Link } from 'react-router-dom';
import './Cart.css';

function Cart({ cart, setCart }) {
  function increaseQuantity(productId) {
    setCart(
      cart.map((product) =>
        product.id === productId
          ? {
              ...product,
              quantity: product.quantity + 1,
            }
          : product,
      ),
    );
  }

  function decreaseQuantity(productId) {
    setCart(
      cart
        .map((product) =>
          product.id === productId
            ? {
                ...product,
                quantity: product.quantity - 1,
              }
            : product,
        )
        .filter((product) => product.quantity > 0),
    );
  }

  function removeFromCart(productId) {
    setCart(cart.filter((product) => product.id !== productId));
  }

  const totalProducts = cart.reduce(
    (sum, product) => sum + product.quantity,
    0,
  );

  const subtotal = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0,
  );

  const shipping = subtotal > 0 && subtotal < 500 ? 29.9 : 0;

  const total = subtotal + shipping;

  return (
    <main className='cart-page'>
      <div className='cart-header'>
        <div>
          <span>SEU PEDIDO</span>
          <h1>Seu carrinho</h1>
        </div>

        <Link to='/produtos'>Continuar comprando</Link>
      </div>

      {cart.length === 0 ? (
        <section className='empty-cart'>
          <div className='empty-cart-icon'>
            <svg viewBox='0 0 24 24' fill='none'>
              <path
                d='M3 4H5L7.4 15.2C7.6 16.2 8.5 17 9.5 17H18'
                stroke='currentColor'
                strokeWidth='1.7'
                strokeLinecap='round'
                strokeLinejoin='round'
              />

              <path
                d='M6.2 7H21L19.2 13H7.5'
                stroke='currentColor'
                strokeWidth='1.7'
                strokeLinecap='round'
                strokeLinejoin='round'
              />

              <circle cx='9.5' cy='20' r='1.2' fill='currentColor' />

              <circle cx='17.5' cy='20' r='1.2' fill='currentColor' />
            </svg>
          </div>

          <h2>Seu carrinho está vazio</h2>

          <p>Explore nossos produtos e encontre algo para o seu setup.</p>

          <Link to='/produtos'>Explorar produtos</Link>
        </section>
      ) : (
        <div className='cart-layout'>
          <section className='cart-items'>
            <div className='cart-items-header'>
              <span>
                {totalProducts} {totalProducts === 1 ? 'item' : 'itens'}
              </span>
            </div>

            {cart.map((product) => (
              <article className='cart-item' key={product.id}>
                <Link to={`/produto/${product.id}`} className='cart-item-image'>
                  <img src={product.image} alt={product.name} />
                </Link>

                <div className='cart-item-info'>
                  <span>{product.category}</span>

                  <Link to={`/produto/${product.id}`}>{product.name}</Link>

                  <strong>
                    R$ {product.price.toFixed(2).replace('.', ',')}
                  </strong>
                </div>

                <div className='cart-item-actions'>
                  <div className='cart-quantity'>
                    <button onClick={() => decreaseQuantity(product.id)}>
                      −
                    </button>

                    <span>{product.quantity}</span>

                    <button onClick={() => increaseQuantity(product.id)}>
                      +
                    </button>
                  </div>

                  <button
                    className='remove-product'
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remover
                  </button>
                </div>

                <strong className='cart-item-total'>
                  R${' '}
                  {(product.price * product.quantity)
                    .toFixed(2)
                    .replace('.', ',')}
                </strong>
              </article>
            ))}
          </section>

          <aside className='checkout-summary'>
            <h2>Resumo do pedido</h2>

            <div className='summary-row'>
              <span>Produtos</span>
              <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
            </div>

            <div className='summary-row'>
              <span>Entrega</span>
              <span>
                {shipping === 0
                  ? 'Grátis'
                  : `R$ ${shipping.toFixed(2).replace('.', ',')}`}
              </span>
            </div>

            <div className='summary-divider' />

            <div className='summary-total'>
              <span>Total</span>

              <strong>R$ {total.toFixed(2).replace('.', ',')}</strong>
            </div>

            <button className='checkout-button'>Finalizar compra</button>

            <div className='checkout-security'>
              <svg viewBox='0 0 24 24' fill='none'>
                <rect
                  x='5'
                  y='10'
                  width='14'
                  height='11'
                  rx='2'
                  stroke='currentColor'
                  strokeWidth='1.6'
                />

                <path
                  d='M8 10V7a4 4 0 0 1 8 0v3'
                  stroke='currentColor'
                  strokeWidth='1.6'
                  strokeLinecap='round'
                />
              </svg>

              <span>Compra segura e protegida</span>
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}

export default Cart;
