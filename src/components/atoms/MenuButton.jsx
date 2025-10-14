import PropTypes from 'prop-types';
import iconMenu from '../../assets/images/icon-menu.svg';
import iconMenuClose from '../../assets/images/icon-menu-close.svg';
import './menu-button.css';

const MenuButton = ({ isOpen, onClick }) => {
  return (
    <button 
      type="button"
      className="menu-button"
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      aria-controls="main-navigation"
    >
      <img 
        src={isOpen ? iconMenuClose : iconMenu} 
        alt="" 
      />
    </button>
  );
};

MenuButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default MenuButton;
