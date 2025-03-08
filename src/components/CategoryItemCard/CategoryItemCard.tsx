"use client";

import React from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

import { CategoryItem } from "@/types/category-item.types";

import styles from "./CategoryItemCard.module.scss";

function CategoryItemCard({ data }: { data: CategoryItem }) {
  //TODO: move this to custom hook or redux
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const animatedSvg = isMobile
    ? data.animatedSvg?.mobile
    : data.animatedSvg?.desktop;

  return (
    <div className={styles.categoryItemCardContainer}>
      <span>{data.name}</span>
      <Image
        src={animatedSvg?.original?.src || ""}
        alt={animatedSvg?.alt || ""}
        width={animatedSvg?.original?.metadata?.width || 25}
        height={animatedSvg?.original?.metadata?.height || 25}
      />
    </div>
  );
}

export default CategoryItemCard;
