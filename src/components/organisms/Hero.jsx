import Button from '../atoms/Button';
import heroImageMobile from '../../assets/images/image-web-3-mobile.jpg';
import heroImageDesktop from '../../assets/images/image-web-3-desktop.jpg';
import './hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__image">
        <picture>
          <source media="(min-width: 768px)" srcSet={heroImageDesktop} />
          <img src={heroImageMobile} alt="Colorful 3D geometric shapes" />
        </picture>
      </div>
      <div className="hero__content">
        <h1 className="hero__title">The Bright Future of Web 3.0?</h1>
        <div className="hero__text">
          <p className="hero__description">
            We dive into the next evolution of the web that claims to put the power of the platforms back 
            into the hands of the people. But is it really fulfilling its promise?
          </p>
          <Button variant="primary">Read More</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
