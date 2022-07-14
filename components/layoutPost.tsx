import Header from './headers/postHeader';
import Footer from './footer';
import React from 'react';
import SEO from './SEO/seo';
import styles from '../styles/components/LayoutPost.module.css';

interface Props {
  children: React.ReactNode;
  url: string;
  title: string;
  description: string;
  image: string;
}

// Layout component for blog posts
// Children prop is mdx component with blog post material
const LayoutPost = (props: Props) => {
  return (
    <div>
      <SEO
        url={props.url}
        openGraphType="website"
        schemaType="website"
        title={props.title}
        description={props.description}
        image={props.image}
      />
      <div id="top"></div>
      <Header />
      <div className={styles.postContainer}>
        <article className={styles.post}>
          <div>{props.children}</div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutPost;
