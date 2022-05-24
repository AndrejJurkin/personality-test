import { useCallback, useEffect, useState } from "react";

export default function useLazyRequest(resource, init, callbacks) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const lazyRequest = useCallback(async () => {
    setLoading(true);
    fetch(resource, init)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        callbacks?.onSuccess?.(data);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [resource, init, callbacks]);

  return [lazyRequest, { data, error, loading }];
}
