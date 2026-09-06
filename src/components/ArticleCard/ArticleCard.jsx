import styles from './ArticleCard.module.css';

function ArticleCard({ article }) {
  const { title, excerpt, author, date, tag, image } = article;
  
  return (
    <article className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.body}>
        <span className={styles.tag}>{tag}</span>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.excerpt}>{excerpt}</p>
        <footer className={styles.footer}>
          <span className={styles.author}>{author}</span>
          <span className={styles.date}>{date}</span>
        </footer>
      </div>
    </article>
  );
}

export default ArticleCard;