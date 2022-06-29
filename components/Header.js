import styles from "../styles/header.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";
import DropDownMenu from "./DropDownMenu";
import Image from "next/image";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const closeMenu = () => {
    setShowMenu(false);
  };
  return (
    <header className={styles.header}>
      <Link href="/" passHref>
        <div className={styles.logoContainer}>
          <img src="/logo.png" className={styles.logo} alt="logo" />
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
 