import React from "react";
import Image from "next/image";

import styles from "./GameItemCard.module.scss";

function GameItemCard({ data }) {
  return (
    <div className={styles.gameItemCardContainer}>
      <Image
        src={data?.image?.["320"]?.src}
        alt={"img alt"}
        width={250}
        height={250}
      />
      <span className={styles.name}>{data?.gameText}</span>
    </div>
  );
}

export default GameItemCard;
