import Button from '../button';
import styles from '../../styles/components/headers/PostHeader.module.css';
import ReturnHomeButton from '../returnHomeButton';
import Link from 'next/link';

const PostHeader = () => {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <Link href="/">
          <a>&larr;</a>
        </Link>
        <div className={styles.homepageButton}>
          <ReturnHomeButton />
        </div>
        <div className={styles.name}>
          <p>Matt Laux</p>
        </div>
        <div className={styles.contactButton}>
          <Button buttonText="Contact Me" buttonColor="red"></Button>
        </div>
      </header>
    </div>
  );
};

export default PostHeader;
