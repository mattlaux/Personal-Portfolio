import Button from '../button';
import styles from '../../styles/components/headers/Header.module.css';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <p>Matt Laux</p>
        <button
          className={styles.icon}
          onClick={() => setNavBarOpen(!navBarOpen)}
        >
          <Image
            src="/images/svgs/bars-solid.svg"
            alt=""
            width={30}
            height={30}
          />
        </button>
        <nav
          className={navBarOpen ? styles.navBarOpen : styles.navBarClose}
          id="links"
        >
          <a href="#about" onClick={() => setNavBarOpen(false)}>
            About
          </a>
          <a href="#portfolio" onClick={() => setNavBarOpen(false)}>
            Portfolio
          </a>
          <a href="#skills" onClick={() => setNavBarOpen(false)}>
            Skills
          </a>
          <a href="#spmp" onClick={() => setNavBarOpen(false)}>
            SPMP
          </a>
          <a href="#blog" onClick={() => setNavBarOpen(false)}>
            Blog
          </a>
          <Link href="https://www.linkedin.com/in/matt-laux">
            <a className={styles.linkedInLink}>
              <Image
                src="/images/svgs/linkedin.svg"
                alt=""
                width={30}
                height={30}
              />
            </a>
          </Link>
          <Button buttonText="Contact Me" buttonColor="red"></Button>
        </nav>
      </header>
    </div>
  );
};

export default Header;
