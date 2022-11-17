import React, { useEffect, useState } from "react";

export const useData = () => {
  const [state, setState] = useState([]);
  const [status, setStatus] = useState(false);
  useEffect(() => {
    const fetchData = async function () {
      setStatus(true);
      try {
        const res = await fetch("http://localhost:3000/api/hello");
        const data = await res.json();
        setState(data);
      } catch (error) {
        console.log(error);
      }
      setStatus(false);
    };
    fetchData();
  }, []);

  return { state, status };
};
