import BlogCard from '../blogCard';
import styles from '../../styles/Home.module.css';

const BlogSection = () => {
  return (
    <section className={styles.blog}>
      <h2>Blog</h2>
      <p>
        Various articles and guides for different issues and technologies I have
        encountered.
      </p>
      <div className={styles.grid}>
        <BlogCard
          postTitle="How to integrate NextAuth.js and Stripe with NextJS and PostgreSQL: Part I"
          postText="Discover how to implement authentication and authorization with NextAuth.js."
          postLink="/posts/settingUpNextAuth"
        />
        <BlogCard
          postTitle="How to integrate NextAuth.js and Stripe with NextJS and
                PostgreSQL: Part II"
          postText="Integrate online payments through Stripe with NextAuth.js and
                postgreSQL."
          postLink="/posts/settingUpStripe"
        />
        <BlogCard
          postTitle="Blog Post #3"
          postText="Discover and deploy boilerplate example Next.js projects."
          postLink=""
        />
        <BlogCard
          postTitle="Blog Post #4"
          postText="Instantly deploy your Next.js site to a public URL with Vercel."
          postLink=""
        />
      </div>
    </section>
  );
};

export default BlogSection;
