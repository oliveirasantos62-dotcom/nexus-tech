import { Link } from 'react-router-dom';

import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <article className='product-card'>
      <div className='product-image'>{product.image}</div>

      <div className='product-info'>
        <p className='product-category'>{product.category}</p>

        <h3>{product.name}</h3>

        <p className='product-price'>
          R$ {product.price.toFixed(2).replace('.', ',')}
        </p>

        <Link to={`/produto/${product.id}`} className='product-button'>
          Ver produto
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;
