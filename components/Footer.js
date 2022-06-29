import React from "react";
import styles from "../styles/footer.module.css";
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Thanks for reading!</p>
      <div className={styles.handles}>
        <a href="https://www.instagram.com/manor_anubhuti/" target="__blank">
          Instagram
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100018900558697"
          target="__blank"
        >
          Facebook
        </a>
      </div>
      <div className={styles.copyright}>
        © Copyright 2022. Made by{" "}
        <a href="https://github.com/partha8">Partha</a> ❤️{" "}
      </div>
    </footer>
  );
};
