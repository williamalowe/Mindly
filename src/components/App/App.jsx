import styles from './App.module.css';
import Habits from '../Habits/Habits';
import Logo from '../Logo/Logo';
const App = () => {
  return (
    <main className={styles.app}>
      <Logo />
      <div className={styles.content}>
        <div>
          <Habits />
        </div>
        <div>
          <Habits />
        </div>
        <div>
          <Habits />
        </div>
      </div>
      
    </main>
  )
}

export default App
