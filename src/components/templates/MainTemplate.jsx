import PropTypes from 'prop-types';
import Header from '../organisms/Header';
import './main-template.css';

const MainTemplate = ({ children }) => {
  return (
    <div className="main-template">
      <Header />
      <main className="main-template__content">
        <div className="container">
          {children}
        </div>
      </main>
    </div>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainTemplate;
