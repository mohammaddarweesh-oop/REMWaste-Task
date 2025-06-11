import { useState, useEffect } from "react";
import api from "../api/axiosConfig";

const useSkips = () => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const response = await api.get(
          "skips/by-location?postcode=NR32&area=Lowestoft"
        );
        setSkips(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  return { skips, loading, error };
};

export default useSkips;
