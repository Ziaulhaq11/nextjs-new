import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/3277808/pexels-photo-3277808.jpeg?cs=srgb&dl=pexels-canva-studio-3277808.jpg&fm=jpg&w=1920&h=1280&_gl=1*5qytqg*_ga*OTA3ODU5ODA0LjE3MDYxOTIwMjk.*_ga_8JE65Q40S6*MTcwNjI0Mzc0Mi4yLjEuMTcwNjI0NDIzMi4wLjAuMA.."
            alt=""
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/3277808/pexels-photo-3277808.jpeg?cs=srgb&dl=pexels-canva-studio-3277808.jpg&fm=jpg&w=1920&h=1280&_gl=1*5qytqg*_ga*OTA3ODU5ODA0LjE3MDYxOTIwMjk.*_ga_8JE65Q40S6*MTcwNjI0Mzc0Mi4yLjEuMTcwNjI0NDIzMi4wLjAuMA.."
            alt=""
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
