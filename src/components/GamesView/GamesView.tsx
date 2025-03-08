import React from "react";

import styles from "./GamesView.module.scss";
import GameItemCard from "../GameItemCard/GameItemCard";

function GamesView({ data }: { data: any }) {
  return (
    <div className={styles.gamesViewContainer}>
      <h2 className={styles.title}>GamesView</h2>
      <div className={styles.gamesList}>
        {data?.length
          ? data.map((itemData: any) => (
              <GameItemCard key={itemData.id} data={itemData} />
            ))
          : null}
      </div>
    </div>
  );
}

export default GamesView;
