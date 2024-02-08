import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    return notFound()
  }
  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href={`/blog/${item.id}`} className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src="https://images.pexels.com/photos/4533596/pexels-photo-4533596.jpeg?cs=srgb&dl=pexels-ravi-kant-4533596.jpg&fm=jpg&w=1280&h=1925&_gl=1*1ynsve3*_ga*OTA3ODU5ODA0LjE3MDYxOTIwMjk.*_ga_8JE65Q40S6*MTcwNjI3OTU4Mi40LjEuMTcwNjI3OTYwMS4wLjAuMA.."
              width={400}
              height={250}
              className={styles.image}
              alt=""
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
