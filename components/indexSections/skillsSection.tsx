import Image from 'next/image';
import styles from '../../styles/Home.module.css';

const SkillsSection = () => {
  return (
    <section>
      <div className={styles.skillsContainer}>
        <h2>Technical Skills</h2>
        <h3>Tier I (Confident)</h3>
        <div className={styles.skills}>
          <figure className={styles.iconText}>
            <Image
              src="/images/svgs/html5-brands.svg"
              alt=""
              width={432}
              height={96}
            />
            <figcaption>HTML5</figcaption>
          </figure>
          <figure className={styles.iconText}>
            <Image
              src="/images/svgs/css3-brands.svg"
              alt=""
              width={432}
              height={96}
            />
            <figcaption>CSS3</figcaption>
          </figure>
          <figure className={styles.iconText}>
            <Image
              src="/images/svgs/ts-brands.svg"
              alt=""
              width={432}
              height={96}
            />
            <figcaption>Typescript</figcaption>
          </figure>
          <figure className={styles.iconText}>
            <Image
              src="/images/svgs/python-brands.svg"
              alt=""
              width={432}
              height={96}
            />
            <figcaption>Python</figcaption>
          </figure>
          <figure className={styles.iconText}>
            <Image
              src="/images/svgs/react.svg"
              alt=""
              width={432}
              height={96}
            />
            <figcaption>React</figcaption>
          </figure>
          <figure className={styles.iconText}>
            <Image src="/images/svgs/node.svg" alt="" width={432} height={96} />
            <figcaption>Node</figcaption>
          </figure>
          <figure className={styles.iconText}>
            <Image
              src="/images/svgs/nextjs.svg"
              alt=""
              width={432}
              height={96}
            />
            <figcaption>Next.js</figcaption>
          </figure>
          <figure className={styles.iconText}>
            <Image src="/images/svgs/jest.svg" alt="" width={432} height={96} />
            <figcaption>Jest</figcaption>
          </figure>
          <figure className={styles.iconText}>
            <Image src="/images/svgs/rtl.svg" alt="" width={432} height={96} />
            <figcaption>React Testing Library</figcaption>
          </figure>
          <figure className={styles.iconText}>
            <Image
              src="/images/svgs/git-brands.svg"
              alt=""
              width={432}
              height={96}
            />
            <figcaption>Git</figcaption>
          </figure>
          <figure className={styles.iconText}>
            <Image
              src="/images/svgs/github-brands.svg"
              alt=""
              width={432}
              height={96}
            />
            <figcaption>Github</figcaption>
          </figure>
          <figure className={styles.iconText}>
            <Image
              src="/images/svgs/bootstrap-brands.svg"
              alt=""
              width={432}
              height={96}
            />
            <figcaption>Bootstrap</figcaption>
          </figure>
          <figure className={styles.iconText}>
            <Image
              src="/images/svgs/mobile-screen-button-solid.svg"
              alt=""
              width={432}
              height={96}
            />
            <figcaption>Responsive Websites</figcaption>
          </figure>
          <figure className={styles.iconText}>
            <Image
              src="/images/svgs/vs-code.svg"
              alt=""
              width={432}
              height={96}
            />
            <figcaption>Visual Studio Code</figcaption>
          </figure>
          <figure className={styles.iconText}>
            <Image
              src="/images/svgs/wordpress.svg"
              alt=""
              width={432}
              height={96}
            />
            <figcaption>Wordpress</figcaption>
          </figure>
        </div>
        <h3>
          Tier II (Have some experience with but would need support from
          documentation)
        </h3>
        <div className={styles.skills}>
          <figure className={styles.iconText}>
            <Image
              src="/images/svgs/postgre.svg"
              alt=""
              width={432}
              height={96}
            />
            <figcaption>PostgreSQL</figcaption>
          </figure>
          <figure className={styles.iconText}>
            <Image
              src="/images/svgs/sass-brands.svg"
              alt=""
              width={432}
              height={96}
            />
            <figcaption>Saas</figcaption>
          </figure>
          <figure className={styles.iconText}>
            <Image
              src="/images/svgs/express.svg"
              alt=""
              width={432}
              height={96}
            />
            <figcaption>Express</figcaption>
          </figure>
          <figure className={styles.iconText}>
            <Image
              src="/images/svgs/cypress.svg"
              alt=""
              width={432}
              height={96}
            />
            <figcaption>Cypress</figcaption>
          </figure>
          <figure className={styles.iconText}>
            <Image
              src="/images/svgs/prisma.svg"
              alt=""
              width={432}
              height={96}
            />
            <figcaption>Prisma</figcaption>
          </figure>
          <figure className={styles.iconText}>
            <Image
              src="/images/svgs/icon-w3c.svg"
              alt=""
              width={432}
              height={96}
            />
            <figcaption>Web Accessibility</figcaption>
          </figure>
          <figure className={styles.iconText}>
            <Image
              src="/images/svgs/django.svg"
              alt=""
              width={432}
              height={96}
            />
            <figcaption>Django</figcaption>
          </figure>
          <figure className={styles.iconText}>
            <Image
              src="/images/svgs/stripe-s-brands.svg"
              alt=""
              width={432}
              height={96}
            />
            <figcaption>Stripe</figcaption>
          </figure>
          <figure className={styles.iconText}>
            <Image
              src="/images/svgs/premier.svg"
              alt=""
              width={432}
              height={96}
            />
            <figcaption>Premier</figcaption>
          </figure>
        </div>
        <h3>Tier III (Have used once or twice but experience is minimal)</h3>
        <div className={styles.skills}>
          <figure className={styles.iconText}>
            <Image
              src="/images/svgs/photoshop.svg"
              alt=""
              width={432}
              height={96}
            />
            <figcaption>Photoshop</figcaption>
          </figure>
          <figure className={styles.iconText}>
            <Image
              src="/images/svgs/figma-brands.svg"
              alt="Figma symbol"
              width={432}
              height={96}
            />
            <figcaption>Figma</figcaption>
          </figure>
          <figure className={styles.iconText}>
            <Image
              src="/images/svgs/cubes-solid.svg"
              alt="Figma symbol"
              width={432}
              height={96}
            />
            <figcaption>Pytesseract</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
