import PropTypes from 'prop-types';
import './nav-link.css';

const NavLink = ({ href, children, onClick }) => {
  const handleClick = (e) => {
    if (href === '#') {
      e.preventDefault();
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a 
      href={href} 
      className="nav-link"
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
};

export default NavLink;
