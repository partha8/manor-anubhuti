import Image from "next/image";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import Link from "next/link";
import styles from "../styles/side-panel.module.css";

const SidePanel = () => {
  return (
    <section className={styles.sidePanel}>
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
        <h3>অসমীয়া ছোৱালী , অসমৰ বোৱাৰী ।</h3>
        <p className={styles.desc}>
          A homemaker with the passion of writing life experiences and doing
          reels 😋❤️ <br /> Poet / Storyteller / Reel Star
        </p>
        <div className={styles.socials}>
          <h4>Keep in touch</h4>
          <div className={styles.iconsContainer}>
            <a
              href="https://www.instagram.com/manor_anubhuti/"
              target="__blank"
            >
              <BsInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100018900558697"
              target="__blank"
            >
              <BsFacebook />
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SidePanel;
