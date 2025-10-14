import ArticleCard from '../molecules/ArticleCard';
import { articles } from '../../data/articlesData';
import './article-grid.css';

const ArticleGrid = () => {
  return (
    <section className="article-grid" aria-label="Featured articles">
      {articles.map(article => (
        <ArticleCard 
          key={article.id}
          number={article.number}
          image={article.image}
          imageAlt={article.imageAlt}
          title={article.title}
          description={article.description}
          href={article.href}
        />
      ))}
    </section>
  );
};

export default ArticleGrid;
