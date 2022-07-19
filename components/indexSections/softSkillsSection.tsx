import SoftSkillCard from '../softSkillCard';
import styles from '../../styles/Home.module.css';

const SoftSkillsSection = () => {
  return (
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
  );
};

export default SoftSkillsSection;
