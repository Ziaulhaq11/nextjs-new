import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3277808/pexels-photo-3277808.jpeg?cs=srgb&dl=pexels-canva-studio-3277808.jpg&fm=jpg&w=1920&h=1280&_gl=1*5qytqg*_ga*OTA3ODU5ODA0LjE3MDYxOTIwMjk.*_ga_8JE65Q40S6*MTcwNjI0Mzc0Mi4yLjEuMTcwNjI0NDIzMi4wLjAuMA.."
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
            pariatur excepturi, eveniet necessitatibus quasi impedit perferendis
            repudiandae voluptates veritatis expedita doloremque doloribus
            accusamus exercitationem ipsum deserunt ex nisi! Labore modi
            <br />
            <br />
            laboriosam nemo quidem quia facilis animi voluptate distinctio!
            Inventore, minus impedit est consectetur illum numquam? Consequatur
            id corporis delectus odit.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laborum
            perspiciatis itaque. Mollitia minima maxime itaque similique rem
            consequatur. Labore eaque maiores asperiores, magni et explicabo
            sapiente minima accusantium obcaecati!
            <br />
            <br /> - Dynamic Websites
            <br />
            <br />- Fast and Handy
            <br />
            <br />
            -Mobile Apps
          </p>
          <Button text="Contact" url="contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
