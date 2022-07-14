import styles from '../styles/components/Button.module.css';

interface Props {
  buttonText: string;
  buttonColor: string;
}

const Button = (props: Props) => {
  return props.buttonColor === 'red' ? (
    <button className={styles.redButton}>{props.buttonText}</button>
  ) : (
    <button className={styles.blueButton}>{props.buttonText}</button>
  );
};

export default Button;
