import NewsCard from '../molecules/NewsCard';
import { newsItems } from '../../data/newsData';
import './news-sidebar.css';

const NewsSidebar = () => {
  return (
    <aside className="news-sidebar" aria-label="Latest news">
      <h2 className="news-sidebar__title">New</h2>
      <div className="news-sidebar__content">
        {newsItems.map(item => (
          <NewsCard 
            key={item.id}
            title={item.title}
            description={item.description}
            href={item.href}
          />
        ))}
      </div>
    </aside>
  );
};

export default NewsSidebar;
