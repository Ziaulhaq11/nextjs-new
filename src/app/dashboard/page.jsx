"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import styles from "./page.module.css";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter()
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    //with this you can cache etc.
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  if (session.status === "loading") {
    return <p>Loading....</p>;
  }
  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }
  console.log(session);
  if (session.status === "authenticated") {
    return <div className={styles.container}>Dashboard</div>;
  }
};

export default Dashboard;
/**const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache : "no-store"
      });
      if (!res.ok) {
        setError(true);
      }
      const data = await res.json()
      setData(data);
      setIsLoading(false);
    }
    getData()
  }, []); */
