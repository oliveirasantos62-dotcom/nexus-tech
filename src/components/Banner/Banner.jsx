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
          próximo nível.
        </h1>

        <p className='banner-description'>
          Descubra produtos para transformar seu setup.
        </p>

        <Link to='/produtos' className='banner-button'>
          Comprar agora
        </Link>
      </div>

      <div className='banner-visual'>
        <div className='banner-circle'></div>

        <div className='banner-device'>
          <div className='laptop-screen'>
            <div className='laptop-display'>
              <div className='display-line'></div>
              <div className='display-line short'></div>
              <div className='display-card'></div>
            </div>
          </div>

          <div className='laptop-base'>
            <div className='laptop-keyboard'></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
