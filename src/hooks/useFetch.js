import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ data: null, error: null, loading: true });

    fetch(url, {
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": "a0CHHl708v6kczmfIugymmaIKan93Pqct35cwCEs",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data,
          });
        } else {
          console.log("componente desmontado");
        }
      });
  }, [url]);

  return state;
};
