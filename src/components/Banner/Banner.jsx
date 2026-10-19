import './Banner.css';

function Banner() {
  return (
    <section className='banner'>
      <div className='banner-content'>
        <p className='banner-subtitle'>NEXUS TECH</p>

        <h1>Tecnologia para o próximo nível</h1>

        <p className='banner-description'>
          Encontre produtos tecnológicos para montar o setup ideal.
        </p>

        <button className='banner-button'>Ver produtos</button>
      </div>

      <div className='banner-image'>
        <img src='/icons.svg' alt='Tecnologia' />
      </div>
    </section>
  );
}

export default Banner;
