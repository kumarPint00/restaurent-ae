import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import WelcomeBanner from "@/components/Banner/WelcomeBanner";
import FeaturedDishes from "@/components/FeaturedDishes/FeaturedDishes";
import SpecialOffer from "@/components/SpecialOffer/SpecialOffer";

export default function Home() {
  return (
    <div className={styles.page}>
        <WelcomeBanner />
      <div className={styles.section}>
        <FeaturedDishes />
      </div>
      <div className={styles.section}>
        <SpecialOffer />
      </div>
    </div>
  );
}
