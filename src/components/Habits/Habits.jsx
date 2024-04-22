import Header from '../Header/Header';
import styles from './Habits.module.css';

const Habits = () => {
  return (
    <div className={styles.habits}>
      <Header 
        header='habits'
      />
    </div>
  )
}

export default Habits
