import Hero from '../organisms/Hero';
import NewsSidebar from '../organisms/NewsSidebar';
import ArticleGrid from '../organisms/ArticleGrid';
import './home-page.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page__main">
        <Hero />
        <NewsSidebar />
      </div>
      <ArticleGrid />
    </div>
  );
};

export default HomePage;
