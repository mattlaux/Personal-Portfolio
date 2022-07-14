import Button from './button';
import styles from '../styles/components/CTA.module.css';

const CTA = () => {
  return (
    <aside className={styles.cta}>
      <p>Let&apos;s create together</p>
      <p>Interested in finding out more. Reach out via email or phone.</p>
      <Button buttonColor="red" buttonText="Let's Connect"></Button>
    </aside>
  );
};

export default CTA;
