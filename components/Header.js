import styles from "../styles/header.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";
import DropDownMenu from "./DropDownMenu";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const closeMenu = () => {
    setShowMenu(false);
  };
  return (
    <header className={styles.header}>
      <Link href="/" passHref>
        <div className={styles.logoContainer}>
          <h3 className={styles.brand}>manor_anubhuti</h3>
          <img className={styles.logoBg} src="/stroke.png" />
          {/* <img src="/logo4.png" className={styles.logo} alt="logo" /> */}
        </div>
      </Link>
      <div className={styles.links}>
        <Link href="/about">
          <a className={styles.link}>About Me</a>
        </Link>
      </div>
      <AiOutlineMenu
        onClick={() => setShowMenu(true)}
        className={styles.menu}
      />
      <DropDownMenu closeMenu={closeMenu} showMenu={showMenu} />
    </header>
  );
};

export default Header;
