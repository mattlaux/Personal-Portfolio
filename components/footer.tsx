import CTA from '../components/cta';
import styles from '../styles/components/Footer.module.css';
import Button from './button';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.cta}>
        <CTA />
      </div>
      <h2 className={styles.footerName}>Matt Laux</h2>
      <p className={styles.footerSlogan}>
        Interested in creating innovative products and continuing to learn.
      </p>
      <div className={styles.resumeButton}>
        <Button buttonColor="red" buttonText="Resume" />
      </div>
      <p>Created with Next.js and hosted on Vercel</p>
      <p>Made with vanilla CSS</p>
    </footer>
  );
};

export default Footer;
