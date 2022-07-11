import styles from '../styles/Button.module.css';

interface Props {
  buttonText: string;
}

const Button = (props: Props) => {
  return (
    <button className={styles.redButton}>
      <p>{props.buttonText}</p>
    </button>
  );
};

export default Button;
