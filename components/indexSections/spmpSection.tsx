import Link from 'next/link';
import Button from '../button';
import styles from '../../styles/Home.module.css';

const SPMPSection = () => {
  return (
    <section className={styles.spmpContainer}>
      <h2>Software Project Management Plan</h2>
      <p>
        A software project management plan was created for this site in order to
        reduce scope creep and minimize rework.
      </p>
      <Link href="/spmp">
        <a>
          <Button
            buttonText="View the SPMP for this site"
            buttonColor="red"
          ></Button>
        </a>
      </Link>
    </section>
  );
};

export default SPMPSection;
