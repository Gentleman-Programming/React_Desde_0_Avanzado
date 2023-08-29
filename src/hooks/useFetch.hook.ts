import { useState, useEffect } from "react";

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T>({} as T);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async (url: string) => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error: any) {
        setError(error);
      }
    };
    fetchData(url);
  }, []);

  return { data, error };
};
