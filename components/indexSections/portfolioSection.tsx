import PortfolioProject from '../portfolioProject';
import styles from '../../styles/Home.module.css';

const PortfolioSection = () => {
  return (
    <section className={styles.grayBackground}>
      <div className={styles.portfolioContainer}>
        <h2 className={styles.portfolioTitle}>Portfolio</h2>
        <PortfolioProject
          title="RetailAlgoTrader"
          text="RetailAlgoTrader is a resource developed for retail algorithmic
                traders. Notable features include educational courses and a
                template generator. This site was created with Next.js for the
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
          imageHeight={910}
          textRight={false}
        ></PortfolioProject>
        <PortfolioProject
          title="Mock Reddit"
          text="Mock Reddit website that pulls current information from the
            Reddit API."
          imagePath="/images/mockReddit.webp"
          imageAlt="Mock reddit homepage"
          imageWidth={1253}
          imageHeight={910}
          textRight={true}
        ></PortfolioProject>
        <div className={styles.skillsAnchor} id="skills"></div>
      </div>
    </section>
  );
};

export default PortfolioSection;
