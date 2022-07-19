import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import SPMPSection from '../components/indexSections/spmpSection';
import SoftSkillsSection from '../components/indexSections/softSkillsSection';
import PortfolioSection from '../components/indexSections/portfolioSection';
import Header from '../components/headers/header';
import Footer from '../components/footer';
import SEO from '../components/SEO/seo';
import BlogSection from '../components/indexSections/blogSection';
import SkillsSection from '../components/indexSections/skillsSection';
import AboutSection from '../components/indexSections/aboutSection';

const Home: NextPage = () => {
  return (
    <div>
      <SEO
        url="https://mattlaux.com"
        openGraphType="website"
        schemaType="website"
        title="Matt Laux portfolio"
        description="Professional web development portfolio site for Matt Laux. View past projects, blog posts, and skills."
        image="https://mattlaux.com/images/profilePic.webp"
      />
      <Header />
      <main className={styles.main}>
        <AboutSection />
        <hr />
        <PortfolioSection />
        <hr />
        <SkillsSection />
        <hr />
        <SoftSkillsSection />
        <hr />
        <SPMPSection />
        <div className={styles.blogAnchor} id="blog"></div>
        <hr />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
