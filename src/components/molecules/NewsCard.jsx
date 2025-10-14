import PropTypes from 'prop-types';
import './news-card.css';

const NewsCard = ({ title, description, href = '#' }) => {
  return (
    <article className="news-card">
      <h3 className="news-card__title">
        <a href={href}>{title}</a>
      </h3>
      <p className="news-card__description">{description}</p>
    </article>
  );
};

NewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string
};

export default NewsCard;
