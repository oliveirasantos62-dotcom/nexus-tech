import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import products from '../../data/products';
import './Header.css';

function Header({ theme, toggleTheme }) {
  const navigate = useNavigate();

  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState('');

  const categories = ['Notebooks', 'Smartphones', 'Monitores', 'Periféricos'];

  const searchResults = search.trim()
    ? products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()),
      )
    : [];

  function closeSearch() {
    setSearchOpen(false);
    setSearch('');
  }

  function openProduct(productId) {
    navigate(`/produto/${productId}`);
    closeSearch();
  }

  function getProducts(category) {
    if (category === 'Todos') {
      return products;
    }

    return products.filter((product) => product.category === category);
  }

  function ProductMenu({ category }) {
    const categoryProducts = getProducts(category);

    return (
      <div className='category-menu'>
        <div className='category-menu-products'>
          {categoryProducts.map((product) => (
            <Link
              key={product.id}
              to={`/produto/${product.id}`}
              className='category-menu-product'
            >
              <div className='category-menu-image'>
                <img src={product.image} alt={product.name} />
              </div>

              <div className='category-menu-info'>
                <strong>{product.name}</strong>

                <span>R$ {product.price.toFixed(2).replace('.', ',')}</span>
              </div>
            </Link>
          ))}
        </div>

        <Link
          to={
            category === 'Todos'
              ? '/produtos'
              : `/produtos?categoria=${encodeURIComponent(category)}`
          }
          className='category-menu-link'
        >
          Ver todos
          <span>→</span>
        </Link>
      </div>
    );
  }

  return (
    <header className='header'>
      <div className='header-container'>
        <Link to='/' className='header-logo'>
          NEXUS TECH
        </Link>

        <nav className='header-nav'>
          <Link to='/'>Início</Link>

          <div className='nav-menu-wrapper'>
            <Link to='/produtos' className='nav-menu-link'>
              Todos
            </Link>

            <ProductMenu category='Todos' />
          </div>

          {categories.map((category) => (
            <div className='nav-menu-wrapper' key={category}>
              <Link
                to={`/produtos?categoria=${encodeURIComponent(category)}`}
                className='nav-menu-link'
              >
                {category}
              </Link>

              <ProductMenu category={category} />
            </div>
          ))}

          <button
            className='search-button'
            onClick={() => setSearchOpen(true)}
            aria-label='Pesquisar'
          >
            <svg viewBox='0 0 24 24' fill='none' className='search-icon'>
              <circle
                cx='11'
                cy='11'
                r='7'
                stroke='currentColor'
                strokeWidth='1.8'
              />

              <path
                d='M16 16L21 21'
                stroke='currentColor'
                strokeWidth='1.8'
                strokeLinecap='round'
              />
            </svg>
          </button>

          <Link to='/carrinho' className='cart-link' aria-label='Carrinho'>
            <svg className='cart-icon' viewBox='0 0 24 24' fill='none'>
              <path
                d='M3 4H5L7.4 15.2C7.6 16.2 8.5 17 9.5 17H18'
                stroke='currentColor'
                strokeWidth='1.8'
                strokeLinecap='round'
                strokeLinejoin='round'
              />

              <path
                d='M6.2 7H21L19.2 13H7.5'
                stroke='currentColor'
                strokeWidth='1.8'
                strokeLinecap='round'
                strokeLinejoin='round'
              />

              <circle cx='9.5' cy='20' r='1.2' fill='currentColor' />

              <circle cx='17.5' cy='20' r='1.2' fill='currentColor' />
            </svg>
          </Link>

          <button
            className='theme-button'
            onClick={toggleTheme}
            aria-label='Alternar tema'
          >
            {theme === 'light' ? (
              <svg viewBox='0 0 24 24' className='theme-icon' fill='none'>
                <circle
                  cx='12'
                  cy='12'
                  r='4'
                  stroke='currentColor'
                  strokeWidth='1.8'
                />

                <path
                  d='M12 2V4M12 20V22M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M2 12H4M20 12H22M4.93 19.07L6.34 17.66M17.66 6.34L19.07 4.93'
                  stroke='currentColor'
                  strokeWidth='1.8'
                  strokeLinecap='round'
                />
              </svg>
            ) : (
              <svg viewBox='0 0 24 24' className='theme-icon' fill='none'>
                <path
                  d='M21 15.2A8.5 8.5 0 0 1 8.8 3a8.5 8.5 0 1 0 12.2 12.2Z'
                  stroke='currentColor'
                  strokeWidth='1.8'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            )}
          </button>
        </nav>

        {searchOpen && (
          <>
            <div className='search-overlay' onClick={closeSearch} />

            <div className='header-search'>
              <div className='search-input-container'>
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  className='header-search-icon'
                >
                  <circle
                    cx='11'
                    cy='11'
                    r='7'
                    stroke='currentColor'
                    strokeWidth='1.8'
                  />

                  <path
                    d='M16 16L21 21'
                    stroke='currentColor'
                    strokeWidth='1.8'
                    strokeLinecap='round'
                  />
                </svg>

                <input
                  autoFocus
                  type='text'
                  placeholder='Buscar produtos...'
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />

                <button
                  className='close-search'
                  onClick={closeSearch}
                  aria-label='Fechar pesquisa'
                >
                  ×
                </button>
              </div>

              {search.trim() && (
                <div className='search-results'>
                  {searchResults.length > 0 ? (
                    searchResults.map((product) => (
                      <button
                        key={product.id}
                        className='search-result'
                        onClick={() => openProduct(product.id)}
                      >
                        <div className='search-result-image'>
                          <img src={product.image} alt={product.name} />
                        </div>

                        <div className='search-result-info'>
                          <strong>{product.name}</strong>
                          <span>{product.category}</span>
                        </div>

                        <span className='search-result-price'>
                          R$ {product.price.toFixed(2).replace('.', ',')}
                        </span>
                      </button>
                    ))
                  ) : (
                    <div className='search-no-results'>
                      Nenhum produto encontrado.
                    </div>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
