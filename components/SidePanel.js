
import Image from "next/image";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import Link from "next/link";
import styles from "../styles/side-panel.module.css";

const SidePanel = () => {
  return (
    <section className={styles.sidePanel}>
      <h3 className={styles.aboutMe}>About Me</h3>
      <section className={styles.aboutContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="/profile.jpg"
            layout="fill"
            objectFit="cover"
            className={styles.image}
            alt="profile"
          />
        </div>
        <h3>Writer and Reader</h3>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          consectetur minus eos doloremque! Eum voluptate mollitia veritatis cum
          ut at, labore tempora distinctio quod laborum vel, enim sunt, officiis
          repellat.
        </p>
        <div className={styles.socials}>
          <h4>Keep in touch</h4>
          <div className={styles.iconsContainer}>
            <Link href="https://www.instagram.com/manor_anubhuti/" passHref>
              <BsInstagram />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100018900558697"
              passHref
            >
              <BsFacebook />
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SidePanel;
