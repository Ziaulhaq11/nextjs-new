"use client";
import React, { useEffect, useState } from "react";
import  useSWR  from "swr";

const Dashboard = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR( //with this you can cache etc.
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  return <div>Dashboard</div>;
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
