import { useEffect, useState } from "react";

const useHttp = (config, transformCallback) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);
  useEffect(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(config.url, {
        method: config.method,
        body: config.body,
        headers: config.headers,
      });
      const data = await response.json();
      console.log("Data", data);
      const newBody = data.films.map((item) => {
        return transformCallback(item);
      });
      setData(newBody);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      setErr("Cannot Fetch Data");
    }
  }, []);
  return [data, isLoading, err];
};

export default useHttp;
