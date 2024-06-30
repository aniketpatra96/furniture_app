import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import { IP as ip } from "@env";
const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    setIsLoading(true);
    setError(false);
    try {
      //replace it with ur own ip
      const response = await axios.get(`http://${ip}:3000/api/products/`);
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
