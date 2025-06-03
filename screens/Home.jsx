import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import axios from "axios";
import styles from "./home.style";
import { Welcome, Carousel } from "../components";
// import Carousel from "../components/home/Carousels";
import Headings from "../components/home/Headings";
import ProductRow from "../components/products/ProductRow";
import { cartContext } from "../contexts/cartContext";
import { API_KEY } from "../api_keys";
import { backend_url } from "../backend_url";
import { userContext } from "../contexts/userContext";
const Home = ({ route, navigation }) => {
  const { cart } = useContext(cartContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { sortBy } = route.params || {};
  const [city,setCity] = useState("");
  const [region,setRegion] = useState("");
  const [ipAddress,setIpAddress] = useState("");
  const { token } = useContext(userContext);
  useEffect(() => {
    fetchProducts();
  }, [sortBy]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${backend_url}/api/products`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        {
          params: { sortBy },
        },
      );
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const data = [
    { id: "welcome", component: <Welcome /> },
    { id: "carousel", component: <Carousel /> },
    // { id: "headings", component: <Headings /> },
    {
      id: "productRow",
      component: <ProductRow products={products} loading={loading} />,
    },
  ];

  const renderItem = ({ item }) => <View key={item.id}>{item.component}</View>;
  const getIp = async() => {
    try {
      const res = await axios.get('https://api.ipify.org/?format=json');
      setIpAddress(res.data.ip);
    } catch (error) {
      console.log(error);
    }
  }

  const getLocation = async (ipAddress) => {
    try {
      const res = await axios.get(`https://ipgeolocation.abstractapi.com/v1/?api_key=${API_KEY}&ip_address=${ipAddress}`)
      setCity(res.data.city);
      setRegion(res.data.region);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getIp();
  },[ipAddress])
  useEffect(() => {getLocation(ipAddress)},[ipAddress])

  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />
          <Text style={styles.location}>{city},&nbsp; {region}</Text>
          <View style={{ alignItems: "flex-end" }}>
            {cart.length > 0 && (
              <View style={styles.cartCount}>
                <Text style={styles.cartNumber}>{cart.length}</Text>
              </View>
            )}
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Home;
