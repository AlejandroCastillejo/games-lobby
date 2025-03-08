import { getLobbyCategories } from "@/services/pikakasino-api/config-service";

import CategoriesView from "@/components/CategoriesView";

import styles from "./page.module.scss";

export default async function HomePage() {
  // Fetch menu lobby categories.
  const data = await getLobbyCategories();

  return (
    <div className={styles.page}>
      <CategoriesView data={data?.menu?.lobby} />
    </div>
  );
}
