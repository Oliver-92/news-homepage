import logoSvg from '../../assets/images/logo.svg';
import './logo.css';

const Logo = () => {
  return (
    <a href="/" className="logo" aria-label="W. - Home">
      <img src={logoSvg} alt="W." />
    </a>
  );
};

export default Logo;
