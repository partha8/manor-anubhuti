import styles from "../styles/blog-card.module.css";
import Image from "next/image";
import Link from "next/link";
const BlogCard = ({ post }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Link href={`/blog/${post.slug}`} passHref>
          <Image
            src={post.frontmatter.cover_image}
            layout="fill"
            objectFit="cover"
            className={styles.image}
            alt="blog post"
          />
        </Link>
      </div>
      <section className={styles.textContainer}>
        <Link href={`/blog/${post.slug}`}>
          <a className={styles.title}>{post.frontmatter.title}</a>
        </Link>
        <small className={styles.date}>{post.frontmatter.date}</small>
        <p className={styles.excerpt}>{post.frontmatter.excerpt}</p>
      </section>
      <Link href={`/blog/${post.slug}`} passHref>
        <button className={styles.readMore}>Read More</button>
      </Link>
    </div>
  );
};

export default BlogCard;
