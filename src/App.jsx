import styles from './App.module.css';
import Header from './components/Header/Header';
import ArticleList from './components/ArticleList/ArticleList';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <ArticleList />
      </main>
    </div>
  );
}

export default App;