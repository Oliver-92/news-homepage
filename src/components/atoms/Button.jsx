import PropTypes from 'prop-types';
import './button.css';

const Button = ({ children, variant = 'primary', onClick, className = '', type = 'button' }) => {
  return (
    <button 
      type={type}
      className={`btn btn--${variant} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
};

export default Button;
