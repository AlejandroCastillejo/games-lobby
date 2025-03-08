import React from "react";
import Link from "next/link";

import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <Link href="/" className={styles.titleContainer}>
        <h1 className={styles.title}>Games Lobby</h1>
      </Link>
      <Link href="/search">
        <button className={styles.searchButton}>Search</button>
      </Link>
    </div>
  );
}

export default Header;
