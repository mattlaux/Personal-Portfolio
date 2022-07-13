import styles from '../styles/SoftSkillCard.module.css';

interface Props {
  skillTitle: string;
  skillText: string;
}

const SoftSkillCard = (props: Props) => {
  return (
    <div className={styles.softSkillCard}>
      <h3 className={styles.softSkillTitle}>{props.skillTitle}</h3>
      <p>{props.skillText}</p>
    </div>
  );
};

export default SoftSkillCard;
