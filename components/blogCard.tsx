import styles from '../styles/components/BlogCard.module.css';

interface Props {
  postTitle: string;
  postText: string;
  postLink: string;
}

const BlogCard = (props: Props) => {
  return (
    <a href={props.postLink} className={styles.card}>
      <h2>{props.postTitle}</h2>
      <p>{props.postText}</p>
    </a>
  );
};

export default BlogCard;
