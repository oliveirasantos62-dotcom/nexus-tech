import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import products from '../../data/products';
import './Header.css';

function Header({ theme, toggleTheme }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const categories = ['Notebooks', 'Smartphones', 'Monitores', 'Periféricos'];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  function handleProductClick(productId) {
    setSearchOpen(false);
    setSearch('');
    navigate(`/produto/${productId}`);
  }

  return (
    <header className='header'>
      <div className='header-container'>
        <Link to='/' className='header-logo'>
          NEXUS TECH
        </Link>

        <nav className='header-nav'>
          <Link to='/'>Início</Link>

          <div className='nav-menu-wrapper desktop-categories'>
            <span className='nav-menu-link'>Notebooks</span>

            <div className='category-menu'>
              <div className='category-menu-products'>
                {products
                  .filter((product) => product.category === 'Notebooks')
                  .map((product) => (
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
                        <span>
                          R$ {product.price.toFixed(2).replace('.', ',')}
                        </span>
                      </div>
                    </Link>
                  ))}
              </div>

              <Link
                to='/produtos?categoria=Notebooks'
                className='category-menu-link'
              >
                Ver todos os notebooks
                <span>→</span>
              </Link>
            </div>
          </div>

          <div className='nav-menu-wrapper desktop-categories'>
            <span className='nav-menu-link'>Smartphones</span>

            <div className='category-menu'>
              <div className='category-menu-products'>
                {products
                  .filter((product) => product.category === 'Smartphones')
                  .map((product) => (
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
                        <span>
                          R$ {product.price.toFixed(2).replace('.', ',')}
                        </span>
                      </div>
                    </Link>
                  ))}
              </div>

              <Link
                to='/produtos?categoria=Smartphones'
                className='category-menu-link'
              >
                Ver todos os smartphones
                <span>→</span>
              </Link>
            </div>
          </div>

          <div className='nav-menu-wrapper desktop-categories'>
            <span className='nav-menu-link'>Monitores</span>

            <div className='category-menu'>
              <div className='category-menu-products'>
                {products
                  .filter((product) => product.category === 'Monitores')
                  .map((product) => (
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
                        <span>
                          R$ {product.price.toFixed(2).replace('.', ',')}
                        </span>
                      </div>
                    </Link>
                  ))}
              </div>

              <Link
                to='/produtos?categoria=Monitores'
                className='category-menu-link'
              >
                Ver todos os monitores
                <span>→</span>
              </Link>
            </div>
          </div>

          <div className='nav-menu-wrapper desktop-categories'>
            <span className='nav-menu-link'>Periféricos</span>

            <div className='category-menu'>
              <div className='category-menu-products'>
                {products
                  .filter((product) => product.category === 'Periféricos')
                  .map((product) => (
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
                        <span>
                          R$ {product.price.toFixed(2).replace('.', ',')}
                        </span>
                      </div>
                    </Link>
                  ))}
              </div>

              <Link
                to='/produtos?categoria=Periféricos'
                className='category-menu-link'
              >
                Ver todos os periféricos
                <span>→</span>
              </Link>
            </div>
          </div>

          <div className='nav-menu-wrapper mobile-categories'>
            <span className='nav-menu-link'>Categorias</span>

            <div className='category-menu mobile-category-menu'>
              <div className='mobile-category-list'>
                {categories.map((category) => (
                  <Link
                    key={category}
                    to={`/produtos?categoria=${encodeURIComponent(category)}`}
                    className='mobile-category-item'
                  >
                    <span>{category}</span>
                    <span>→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <button
            className='search-button'
            onClick={() => setSearchOpen((current) => !current)}
            aria-label='Pesquisar'
          >
            <svg className='search-icon' viewBox='0 0 24 24' fill='none'>
              <circle
                cx='11'
                cy='11'
                r='6.5'
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
          </Link>

          <button
            className='theme-button'
            onClick={toggleTheme}
            aria-label='Alterar tema'
          >
            {theme === 'light' ? (
              <svg className='theme-icon' viewBox='0 0 24 24' fill='none'>
                <circle
                  cx='12'
                  cy='12'
                  r='4'
                  stroke='currentColor'
                  strokeWidth='1.7'
                />
                <path
                  d='M12 2V4M12 20V22M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M2 12H4M20 12H22M4.93 19.07L6.34 17.66M17.66 6.34L19.07 4.93'
                  stroke='currentColor'
                  strokeWidth='1.7'
                  strokeLinecap='round'
                />
              </svg>
            ) : (
              <svg className='theme-icon' viewBox='0 0 24 24' fill='none'>
                <path
                  d='M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z'
                  stroke='currentColor'
                  strokeWidth='1.7'
                  strokeLinejoin='round'
                />
              </svg>
            )}
          </button>
        </nav>

        {searchOpen && (
          <>
            <div
              className='search-overlay'
              onClick={() => setSearchOpen(false)}
            />

            <div className='header-search'>
              <div className='search-input-container'>
                <svg
                  className='header-search-icon'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <circle
                    cx='11'
                    cy='11'
                    r='6.5'
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
                  onClick={() => {
                    setSearchOpen(false);
                    setSearch('');
                  }}
                >
                  ×
                </button>
              </div>

              {search.length > 0 && (
                <div className='search-results'>
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <button
                        key={product.id}
                        className='search-result'
                        onClick={() => handleProductClick(product.id)}
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
