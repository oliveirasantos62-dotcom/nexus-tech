import './CategoryCard.css';
import { Link } from 'react-router-dom';

function CategoryCard({ title }) {
  const icons = {
    Notebooks: '💻',
    Smartphones: '📱',
    Monitores: '🖥️',
    Periféricos: '⌨️',
  };

  return (
    <Link
      to={`/produtos?categoria=${encodeURIComponent(title)}`}
      className='category-card'
    >
      <div className='category-icon'>{icons[title]}</div>

      <h3>{title}</h3>
    </Link>
  );
}

export default CategoryCard;
