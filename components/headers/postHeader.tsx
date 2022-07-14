import Button from '../button';
import styles from '../../styles/components/headers/Header.module.css';
import ReturnHomeButton from '../returnHomeButton';

const PostHeader = () => {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <ReturnHomeButton />
        <p>Matt Laux</p>
        <Button buttonText="Contact Me" buttonColor="red"></Button>
      </header>
    </div>
  );
};

export default PostHeader;
