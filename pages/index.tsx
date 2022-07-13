import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Button from '../components/button';
import CTA from '../components/cta';
import Link from 'next/link';
import SoftSkillCard from '../components/softSkillCard';
import PortfolioProject from '../components/portfolioProject';
import NavBar from '../components/navBar';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Matt Laux Portfolio</title>
        <meta
          name="description"
          content="Professional web development portfolio site for Matt Laux."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <section className={styles.about} id="about">
          <div className={styles.text}>
            <h1 className={styles.title}>Welcome to my portfolio site!</h1>
            <p className={styles.description}>
              I am a software engineer from Texas A&M University looking for an
              entry-level software engineering position.
            </p>
            <p>
              I am primarily interested in full-stack engineering positions.
            </p>
            <p>
              I have experience with React and NextJS on the frontend. On the
              backend I have experience with Express and PostgreSQL.
            </p>
            <div id="portfolio"></div>
            <Button buttonText="Contact Me" buttonColor="red"></Button>
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
        <hr />
        <section className={styles.grayBackground}>
          <h2 className={styles.portfolioTitle}>Portfolio</h2>
          <PortfolioProject
            title="RetailAlgoTrader"
            text="RetailAlgoTrader is a resource developed for retail algorithmic
                traders. Notable features include educational courses and a
                template generator. This site was created with NextJS for the
                frontend and backend."
            imagePath="/images/ratDashboard.webp"
            imageAlt="RetailAlgoTrader homepage"
            imageWidth={1253}
            imageHeight={910}
            textRight={true}
          ></PortfolioProject>
          <PortfolioProject
            title="ezMTO"
            text="ezMTO is a SAAS tool for engineers and estimators within the
            construction industry. Notable features include OCR for
            construction drawings. This site was created with React on the
            frontend and Express on the backend."
            imagePath="/images/ezmto.webp"
            imageAlt="ezMTO homepage"
            imageWidth={1253}
            imageHeight={2272}
            textRight={false}
          ></PortfolioProject>
          <PortfolioProject
            title="Mock Reddit"
            text="Mock Reddit website that pulls current information from the
            Reddit API."
            imagePath="/images/mockReddit.webp"
            imageAlt="Mock reddit homepage"
            imageWidth={1253}
            imageHeight={2272}
            textRight={true}
          ></PortfolioProject>
          <div className={styles.skillsAnchor} id="skills"></div>
        </section>
        <hr />
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
            <h3>
              Tier III (Have used once or twice but experience is minimal)
            </h3>
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
        <hr />
        <section className={styles.grayBackground}>
          <div className={styles.skillsContainer}>
            <h2>Soft Skills</h2>
            <div className={styles.softSkills}>
              <SoftSkillCard
                skillTitle="Scope Management"
                skillText="Developed scopes of work for both engineering and construction
                  projects in the Houston Chemical Industry. Managed change orders resulting both from client adjustments
                  and in-house mistakes."
              ></SoftSkillCard>
              <SoftSkillCard
                skillTitle="Customer Relations"
                skillText="Worked with Client representatives to coordinate construction projects and scope creep."
              ></SoftSkillCard>
              <SoftSkillCard
                skillTitle="Project Management"
                skillText="Tracked financial and manhour budgets for a wide range of construction projects. Coordinated efforst between engineering team, construction team, and supply chain team."
              ></SoftSkillCard>
              <SoftSkillCard
                skillTitle="Project Estimating"
                skillText="Worked with engineering team and construction team to create bids for potential engineering and construction projects."
              ></SoftSkillCard>
              <SoftSkillCard
                skillTitle="International Experience"
                skillText="Worked remotely with students from Universidade Federal do Rio de Janeiro to develop pallet systems for Tenaris. Spent a semester at the National University of Singapore's honor college living and working with students from Southeast Asia."
              ></SoftSkillCard>
              <SoftSkillCard
                skillTitle="Contractor Management"
                skillText="Tracked man-hours and financials for a wide variety of contractors on active construction projects. Issued disciplinary action when necessary and enforced agreed upon scope of work."
              ></SoftSkillCard>
            </div>
            <div id="spmp"></div>
          </div>
        </section>
        <hr />
        <section className={styles.spmpContainer}>
          <h2>Software Project Management Plan</h2>
          <p>
            A software project management plan was created for this site in
            order to reduce scope creep and minimize rework.
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
        <div className={styles.blogAnchor} id="blog"></div>
        <hr />
        <section className={styles.blog}>
          <h2>Blog</h2>
          <p>
            Various articles and guides for different issues and technologies I
            have encountered.
          </p>
          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Blog Post #1 &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Blog Post #2 &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h2>Blog Post #3 &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Blog Post #4 &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.cta}>
          <CTA />
        </div>
        <h2 className={styles.footerName}>Matt Laux</h2>
        <p>
          Interested in creating innovative products and continuing to learn.
        </p>
        <p>Created with NextJS and hosted on Vercel</p>
        <p>Made with vanilla CSS</p>
      </footer>
    </div>
  );
};

export default Home;
