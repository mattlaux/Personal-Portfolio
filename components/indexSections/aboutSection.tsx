import Button from '../button';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.text}>
        <h1 className={styles.title}>Welcome to my portfolio site!</h1>
        <p className={styles.description}>
          I am a software engineer from Texas A&M University looking for an
          entry-level software engineering position.
        </p>
        <p>I am primarily interested in full-stack engineering positions.</p>
        <p>
          I have experience with React and Next.js on the frontend. On the
          backend I have experience with Express and PostgreSQL.
        </p>
        <div id="portfolio"></div>
        <Button buttonText="Contact Me" buttonColor="red"></Button>
        <Link href="/resume">
          <a>
            <Button buttonText="View My LinkedIn" buttonColor="blue"></Button>
          </a>
        </Link>
      </div>
      <figure className={styles.aboutImage}>
        <Image
          src="/images/profilePic.webp"
          alt="Profile headshot"
          width={3888}
          height={2592}
        />
      </figure>
    </section>
  );
};

export default AboutSection;
