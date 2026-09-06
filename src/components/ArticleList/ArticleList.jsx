import styles from './ArticleList.module.css';
import ArticleCard from '../ArticleCard/ArticleCard';
import articles from '../../data/articles';

function ArticleList() {
  return (
    <section className={styles.list}>
      {articles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </section>
  );
}

export default ArticleList;