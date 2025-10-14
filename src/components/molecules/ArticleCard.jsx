import PropTypes from 'prop-types';
import './article-card.css';

const ArticleCard = ({ number, image, imageAlt, title, description, href = '#' }) => {
  return (
    <article className="article-card">
      <div className="article-card__image">
        <img src={image} alt={imageAlt} />
      </div>
      <div className="article-card__content">
        <span className="article-card__number">{number}</span>
        <h3 className="article-card__title">
          <a href={href}>{title}</a>
        </h3>
        <p className="article-card__description">{description}</p>
      </div>
    </article>
  );
};

ArticleCard.propTypes = {
  number: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string
};

export default ArticleCard;
