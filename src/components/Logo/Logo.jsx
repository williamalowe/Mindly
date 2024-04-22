import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.logo_container}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.title}>
        <h3>mindly.</h3>
        <h5>Habit tracking and personal diary for a healthier mind</h5>
      </div>
    </div>
  )
}

export default Logo
