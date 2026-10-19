import { Link } from 'react-router-dom';
import './Cart.css';

function Cart({ cart, setCart }) {
  function increaseQuantity(productId) {
    setCart(
      cart.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      ),
    );
  }

  function decreaseQuantity(productId) {
    setCart(
      cart
        .map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity - 1 }
            : product,
        )
        .filter((product) => product.quantity > 0),
    );
  }

  function removeFromCart(productId) {
    setCart(cart.filter((product) => product.id !== productId));
  }

  const total = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0,
  );

  const totalProducts = cart.reduce(
    (sum, product) => sum + product.quantity,
    0,
  );

  return (
    <main className='cart-page'>
      <h1>Meu carrinho</h1>

      {cart.length === 0 ? (
        <div className='empty-cart'>
          <h2>Seu carrinho está vazio.</h2>
          <p>Adicione produtos para continuar.</p>
        </div>
      ) : (
        <div className='cart-content'>
          <div className='cart-products'>
            {cart.map((product) => (
              <article className='cart-item' key={product.id}>
                <Link to={`/produto/${product.id}`} className='cart-item-image'>
                  <img src={product.image} alt={product.name} />
                </Link>

                <div className='cart-item-info'>
                  <Link
                    to={`/produto/${product.id}`}
                    className='cart-product-link'
                  >
                    <h2>{product.name}</h2>
                  </Link>

                  <p>{product.category}</p>

                  <strong>
                    R$ {product.price.toFixed(2).replace('.', ',')}
                  </strong>
                </div>

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
              </article>
            ))}
          </div>

          <aside className='cart-summary'>
            <h2>Resumo</h2>

            <p>Produtos: {totalProducts}</p>

            <strong>Total: R$ {total.toFixed(2).replace('.', ',')}</strong>

            <button>Finalizar compra</button>
          </aside>
        </div>
      )}
    </main>
  );
}

export default Cart;
