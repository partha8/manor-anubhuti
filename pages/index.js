
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../utils/utils";
import BlogCard from "../components/BlogCard";
import SidePanel from "../components/SidePanel";

export default function Home({ posts }) {
  return (
    <div className="page">
      <div className="container">
        <section className="blogs">
          {posts.map((post, index) => {
            return <BlogCard key={index} post={post} />;
          })}
        </section>
        <SidePanel />
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
};
