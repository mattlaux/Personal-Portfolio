import styles from '../styles/components/JumpTopButton.module.css';

const JumpTopButton = () => {
  return (
    <a href="#top" className={styles.jumpTopButton}>
      &uarr;
    </a>
  );
};

export default JumpTopButton;
