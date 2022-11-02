import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Markdown from "marked-react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/post-page.module.css";
import SidePanel from "../../components/SidePanel";

export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <div className="page">
      <div className="container">
        <div className={styles.post}>
          <Link href="/">
            <a
              style={{
                textDecoration: "underline",
                
              }}
            >
              Go back to read more blogs!
            </a>
          </Link>
          <p className={styles.postDate}>Published {date}</p>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.imgContainer}>
            <Image
              layout="fill"
              objectFit="cover"
              className={styles.image}
              src={cover_image}
              alt="cover image"
            />
          </div>

          <div className={styles.postBody}>
            <Markdown>{content}</Markdown>
          </div>
        </div>
        <SidePanel />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
