import logo from './logo.svg';
import styles from './App.module.css'
import LeftPanel from './components/LeftPanel';
import RestPanel from './components/RestPanel';

function App() {
  return (
    <div className={styles.App}>
      <LeftPanel/>
      <RestPanel/>
    </div>
  );
}

export default App;
