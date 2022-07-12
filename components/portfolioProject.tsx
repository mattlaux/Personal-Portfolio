import Button from './button';
import styles from '../styles/PortfolioProject.module.css';
import Image from 'next/image';

interface Props {
  title: string;
  text: string;
  imagePath: string;
  imageAlt: string;
  textRight: boolean;
}

const PortfolioProject = (props: Props) => {
  return (
    <div className={styles.projectContainer}>
      <figure className={props.textRight ? styles.leftSide : styles.rightSide}>
        <Image
          src={props.imagePath}
          alt={props.imageAlt}
          width={100}
          height={100}
        />
      </figure>
      <div className={props.textRight ? styles.rightSide : styles.leftSide}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <Button buttonText="View Live Site" buttonColor="lightBlue"></Button>
        <Button buttonText="View Source Code" buttonColor="red"></Button>
      </div>
    </div>
  );
};

export default PortfolioProject;
