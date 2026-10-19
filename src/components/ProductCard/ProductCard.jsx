import './ProductCard.css';

function ProductCard({ name, price }) {
  return (
    <article className='product-card'>
      <div className='product-image'>🖥️</div>

      <div className='product-info'>
        <h3>{name}</h3>

        <p className='product-price'>{price}</p>

        <button>Ver produto</button>
      </div>
    </article>
  );
}

export default ProductCard;
