import React from "react";
import Link from "next/link";

import { CategoryItem } from "@/types/category-item.types";

import CategoryItemCard from "@/components/CategoryItemCard";

import styles from "./CategoriesView.module.scss";

function CategoriesView({ data }: { data: { items: CategoryItem[] } }) {
  console.log("data", data);
  const items = data?.items;
  items.shift();

  return (
    <div className={styles.categoriesViewContainer}>
      <h2 className={styles.title}>Categories</h2>
      <div className={styles.categoriesList}>
        {items.length
          ? items?.map((item) => (
              <Link
                href={{
                  pathname: `games${item.path}`,
                }}
                key={item.id}
              >
                <CategoryItemCard key={item.id} data={item} />
              </Link>
            ))
          : null}
      </div>
    </div>
  );
}

export default CategoriesView;
