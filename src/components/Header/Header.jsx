import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <div className='header-container'>
        <Link to='/' className='header-logo'>
          NEXUS TECH
        </Link>

        <nav className='header-nav'>
          <Link to='/'>Início</Link>
          <Link to='/produtos'>Produtos</Link>
          <Link to='/carrinho'>🛒 Carrinho</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
