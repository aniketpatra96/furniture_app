// import { View, Text } from "react-native";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { backend_url } from "../backend_url";
import { userContext } from "../contexts/userContext";
const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const { token } = useContext(userContext);
  const fetchData = async () => {
    setIsLoading(true);
    setError(false);
    try {
      const response = await axios.get(`${backend_url}/api/products/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };
  return { data, isLoading, error, refetch };
};

export default useFetch;
