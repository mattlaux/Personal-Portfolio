import CTA from '../components/cta';
import styles from '../styles/components/Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

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
      <Link href="https://www.linkedin.com/in/matt-laux">
        <a>
          <Image
            src="/images/svgs/linkedin.svg"
            alt=""
            width={50}
            height={50}
          />
        </a>
      </Link>
      <p>Created with Next.js and hosted on Vercel</p>
      <p>Made with vanilla CSS</p>
    </footer>
  );
};

export default Footer;
