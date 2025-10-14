import { useState, useEffect } from 'react';
import Logo from '../atoms/Logo';
import MenuButton from '../atoms/MenuButton';
import Navigation from '../molecules/Navigation';
import './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalOverflow;
    }
    
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__content">
            <Logo />
            <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
            <Navigation isOpen={isMenuOpen} onLinkClick={closeMenu} />
          </div>
        </div>
      </header>
      {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
};

export default Header;
