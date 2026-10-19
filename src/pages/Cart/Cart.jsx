import './Cart.css';

function Cart({ cart, setCart }) {
  function removeFromCart(productId) {
    const updatedCart = cart.filter((product) => product.id !== productId);

    setCart(updatedCart);
  }

  const total = cart.reduce((sum, product) => sum + product.price, 0);

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
                <div className='cart-item-image'>{product.image}</div>

                <div className='cart-item-info'>
                  <h2>{product.name}</h2>

                  <p>{product.category}</p>

                  <strong>
                    R$ {product.price.toFixed(2).replace('.', ',')}
                  </strong>
                </div>

                <button onClick={() => removeFromCart(product.id)}>
                  Remover
                </button>
              </article>
            ))}
          </div>

          <aside className='cart-summary'>
            <h2>Resumo</h2>

            <p>Produtos: {cart.length}</p>

            <strong>Total: R$ {total.toFixed(2).replace('.', ',')}</strong>

            <button>Finalizar compra</button>
          </aside>
        </div>
      )}
    </main>
  );
}

export default Cart;
