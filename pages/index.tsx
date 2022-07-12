import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Button from '../components/button';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matt Laux Portfolio</title>
        <meta
          name="description"
          content="Professional web development portfolio site for Matt Laux."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <p>Matt Laux</p>
        <nav className={styles.navBar}>
          <a>About</a>
          <a>Skills</a>
          <a>Portfolio</a>
          <a>SPMP</a>
          <a>Blog</a>
          <Button buttonText="Contact Me" buttonColor="lightBlue"></Button>
        </nav>
      </header>
      <main className={styles.main}>
        <section className={styles.about}>
          <div className={styles.text}>
            <h1 className={styles.title}>Welcome to my portfolio site!</h1>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button buttonText="Contact Me" buttonColor="red"></Button>
          </div>
          <figure className={styles.image}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </figure>
        </section>
        <section>
          <h2 className={styles.sectionTitle}>Past Projects</h2>
          <div className={styles.projectContainer}>
            <figure className={styles.ratImage}>jlkjlkj</figure>
            <div className={styles.ratText}>
              <h3>RetailAlgoTrader</h3>
              <p>
                RetailAlgoTrader is a resource developed for retail algorithmic
                traders. Notable features include educational courses and a
                template generator. This site was created with NextJS for the
                frontend and backend.
              </p>
              <Button
                buttonText="View Live Site"
                buttonColor="lightBlue"
              ></Button>
              <Button buttonText="View Source Code" buttonColor="red"></Button>
            </div>
          </div>
          <div className={styles.projectContainer}>
            <div className={styles.ezMtoText}>
              <h3>ezMTO</h3>
              <p>
                ezMTO is a SAAS tool for engineers and estimators within the
                construction industry. Notable features include OCR for
                construction drawings. This site was created with React on the
                frontend and Express on the backend.
              </p>
              <Button
                buttonText="View Live Site"
                buttonColor="lightBlue"
              ></Button>
              <Button buttonText="View Source Code" buttonColor="red"></Button>
            </div>
            <figure className={styles.ezMtoImage}>jlkjlkj</figure>
          </div>
        </section>
        <section>
          <h2 className={styles.sectionTitle}>Technical Skills</h2>
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
                src="/images/svgs/js-brands.svg"
                alt=""
                width={432}
                height={96}
              />
              <figcaption>Javascript</figcaption>
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
                src="/images/svgs/react.svg"
                alt=""
                width={432}
                height={96}
              />
              <figcaption>React</figcaption>
            </figure>
            <figure className={styles.iconText}>
              <Image
                src="/images/svgs/node.svg"
                alt=""
                width={432}
                height={96}
              />
              <figcaption>Node</figcaption>
            </figure>
            <figure className={styles.iconText}>
              <Image
                src="/images/svgs/nextjs.svg"
                alt=""
                width={432}
                height={96}
              />
              <figcaption>NextJS</figcaption>
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
                src="/images/svgs/wordpress.svg"
                alt=""
                width={432}
                height={96}
              />
              <figcaption>Wordpress</figcaption>
            </figure>
            <figure className={styles.iconText}>
              <Image
                src="/images/svgs/postgre.svg"
                alt=""
                width={432}
                height={96}
              />
              <figcaption>PostgreSQL</figcaption>
            </figure>
          </div>
          <h3>
            Tier II (Have some experience with but would need support from
            documentation)
          </h3>
          <div className={styles.skills}>
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
                src="/images/svgs/pycharm.svg"
                alt=""
                width={432}
                height={96}
              />
              <figcaption>Pycharm</figcaption>
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
        </section>
        <section>
          <h2 className={styles.sectionTitle}>Soft Skills</h2>
          <ul>
            <li>Scope Management</li>
            <li>Customer Relations</li>
            <li>Project Management</li>
            <li>Project Estimating</li>
          </ul>
        </section>
        <section>
          <h2>Software Project Management Plan</h2>
          <p>
            A software project management plan was created for this site in
            order to reduce scope creep and minimize rework.
          </p>
          <Button
            buttonText="View the SPMP for this site"
            buttonColor="red"
          ></Button>
        </section>
        <section>
          <h2>Blog</h2>
          <p>
            Various articles and guides for different issues and technologies I
            have encountered.
          </p>
        </section>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
