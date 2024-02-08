import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    return notFound()
  }
  return res.json();
}

const BlogPost = async ({params}) => {
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
            excepturi minima voluptatum dolor exercitationem illum reprehenderit
            nesciunt amet incidunt ab a, nulla vitae laborum laboriosam ratione
            minus perferendis, corrupti est!
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-1222271.jpg&fm=jpg&w=640&h=427&_gl=1*9y21jh*_ga*OTA3ODU5ODA0LjE3MDYxOTIwMjk.*_ga_8JE65Q40S6*MTcwNjMzMzAyNi41LjEuMTcwNjMzMzAzNi4wLjAuMA.."
              width={40}
              height={40}
              className={styles.avatar}
              alt=""
            />
            <span className={styles.username}>John</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3277808/pexels-photo-3277808.jpeg?cs=srgb&dl=pexels-canva-studio-3277808.jpg&fm=jpg&w=1920&h=1280&_gl=1*5qytqg*_ga*OTA3ODU5ODA0LjE3MDYxOTIwMjk.*_ga_8JE65Q40S6*MTcwNjI0Mzc0Mi4yLjEuMTcwNjI0NDIzMi4wLjAuMA.."
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est saepe
          maxime cupiditate tempora exercitationem quaerat nesciunt culpa odit
          eos eligendi, vero modi nisi dolores sed veniam architecto tenetur?
          Numquam officiis tempore impedit! Dicta temporibus porro delectus quam
          itaque assumenda eos nemo quisquam reiciendis, soluta pariatur
          repellat eaque omnis sunt ad.
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est saepe
          maxime cupiditate tempora exercitationem quaerat nesciunt culpa odit
          eos eligendi, vero modi nisi dolores sed veniam architecto tenetur?
          Numquam officiis tempore impedit! Dicta temporibus porro delectus quam
          itaque assumenda eos nemo quisquam reiciendis, soluta pariatur
          repellat eaque omnis sunt ad.
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est saepe
          maxime cupiditate tempora exercitationem quaerat nesciunt culpa odit
          eos eligendi, vero modi nisi dolores sed veniam architecto tenetur?
          Numquam officiis tempore impedit! Dicta temporibus porro delectus quam
          itaque assumenda eos nemo quisquam reiciendis, soluta pariatur
          repellat eaque omnis sunt ad.
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est saepe
          maxime cupiditate tempora exercitationem quaerat nesciunt culpa odit
          eos eligendi, vero modi nisi dolores sed veniam architecto tenetur?
          Numquam officiis tempore impedit! Dicta temporibus porro delectus quam
          itaque assumenda eos nemo quisquam reiciendis, soluta pariatur
          repellat eaque omnis sunt ad.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
