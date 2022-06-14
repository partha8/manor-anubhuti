import styles from "../../styles/about.module.css";
import Image from "next/image";
const About = () => {
  return (
    <div className="page">
      <h2 className={styles.about}>About Me.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi quo,
        excepturi voluptate similique iure debitis officia aliquam eaque illum,
        <br />
        nulla dolores! Quas non blanditiis maxime accusamus dolore mollitia,
        magni alias.
      </p>
      <div className={styles.aboutContainer}>
        <Image
          src="/profile.jpg"
          width={400}
          height={400}
          className={styles.image}
          alt="profile"
        />
        <div>
          <p className={styles.aboutContent}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
            corporis praesentium minus unde, veritatis illum enim deserunt sed
            dicta sequi eveniet sit aut est ad blanditiis cupiditate saepe
            quidem? Beatae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
