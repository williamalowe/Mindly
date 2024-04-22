import styles from './Header.module.css';

const Header = ({ header }) => {
  return (
    <div className={styles.header}>
      <h3>{header}</h3>
    </div>
  )
}

export default Header
