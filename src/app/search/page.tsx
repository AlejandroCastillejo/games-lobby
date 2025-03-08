import React from "react";

import SearchView from "@/components/SearchView/SearchView";
import styles from "./page.module.scss";

export default function Page() {
  return (
    <div className={styles.page}>
      <SearchView />
    </div>
  );
}
