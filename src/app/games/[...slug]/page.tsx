import React from "react";
import { getPageData } from "@/services/pikakasino-api/games-service";

import GamesView from "@/components/GamesView/GamesView";

import styles from "./page.module.scss";

export default async function GamePage({
  params,
}: {
  params: { slug: string[] };
}) {
  const slug = await params.slug;
  const gamesPath = slug.join("/");

  const data = await getPageData(`/${gamesPath}`);

  return (
    <div className={styles.page}>
      <GamesView data={data?.components?.[0]?.games} />
    </div>
  );
}
