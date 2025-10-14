import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import NavLink from '../atoms/NavLink';
import './navigation.css';

const Navigation = ({ isOpen, onLinkClick }) => {
  const navRef = useRef(null);

  useEffect(() => {
    // Only apply aria-hidden on mobile
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        navRef.current?.removeAttribute('aria-hidden');
      } else {
        navRef.current?.setAttribute('aria-hidden', !isOpen);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <nav 
      ref={navRef}
      id="main-navigation"
      className={`navigation ${isOpen ? 'navigation--open' : ''}`}
    >
      <ul className="navigation__list">
        <li><NavLink href="#" onClick={onLinkClick}>Home</NavLink></li>
        <li><NavLink href="#" onClick={onLinkClick}>New</NavLink></li>
        <li><NavLink href="#" onClick={onLinkClick}>Popular</NavLink></li>
        <li><NavLink href="#" onClick={onLinkClick}>Trending</NavLink></li>
        <li><NavLink href="#" onClick={onLinkClick}>Categories</NavLink></li>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onLinkClick: PropTypes.func.isRequired
};

export default Navigation;
