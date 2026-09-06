import styles from './Header.module.css';
import Nav from '../Nav/Nav';
import articles from '../../data/articles';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.title}>React Blog</h1>
          <span className={styles.count}>Статей: {articles.length}</span>
        </div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;