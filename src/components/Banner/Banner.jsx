import { Link } from 'react-router-dom';
import './Banner.css';

function Banner() {
  return (
    <section className='banner'>
      <div className='banner-content'>
        <p className='banner-label'>NEXUS TECH</p>

        <h1>
          Tecnologia para o
          <br />
          próximo nível
        </h1>

        <p className='banner-description'>
          Encontre produtos tecnológicos para montar o setup ideal.
        </p>

        <Link to='/produtos' className='banner-button'>
          Ver produtos
        </Link>
      </div>
    </section>
  );
}

export default Banner;
