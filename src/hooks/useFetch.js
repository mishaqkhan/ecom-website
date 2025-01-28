import React from "react";

export function useFetch(url) {
  const [data, setData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!url) {
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(url);
      setIsLoading(false);

      const jsonData = await response.json();

      setData(jsonData);
    };

    fetchData();
  }, [url]);

  return { data, isLoading };
}
