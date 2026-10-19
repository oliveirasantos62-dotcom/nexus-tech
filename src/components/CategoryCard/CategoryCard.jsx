import './CategoryCard.css';

function CategoryCard({ title }) {
  return (
    <article className='category-card'>
      <div className='category-icon'>💻</div>

      <h3>{title}</h3>
    </article>
  );
}

export default CategoryCard;
