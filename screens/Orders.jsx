import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { IP as ip } from "@env";
import axios from "axios";
import { userContext } from "../contexts/userContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../constants";

const Orders = () => {
  const { user } = useContext(userContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders(user._id);
  }, [user._id]);

  const fetchOrders = async (userId) => {
    try {
      const response = await axios.get(`http://${ip}:3000/orders/${userId}`);
      if (response.status === 200) {
        setOrders(response.data);
      } else {
        console.error("Unable to fetch orders");
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };
  const handleOrderDetails = (item) => {
    console.log('order handled');
  }
  const renderProductItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleOrderDetails(item)}>
        <View style={styles.container}>
          {item.products.map((product) => (
            <View key={product._id}>
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: product.productImage }}
                  style={styles.image}
                />
              </View>
              <View style={styles.details}>
                <Text style={styles.title} numberOfLines={2}>
                  {product.productName}
                </Text>
                <Text style={styles.price}>Price: ${product.productPrice}</Text>
                <Text style={styles.price}>Quantity: {product.quantity}</Text>
              </View>
            </View>
          ))}
          <Text style={styles.totalPrice}>
            Total Order Amount: ${item.totalPrice}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {orders.length === 0 ? (
        <Text style={styles.noOrdersText}>No Orders Placed</Text>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item) => item._id}
          renderItem={renderProductItem}
          contentContainerStyle={styles.flatListContainer}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
  },
  noOrdersText: {
    marginTop: SIZES.large,
    textAlign: "center",
    fontSize: SIZES.large,
    fontWeight: "bold",
    color: COLORS.darkGray,
  },
  flatListContainer: {
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.medium,
  },
  container: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    marginBottom: SIZES.medium,
    elevation: 3,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  imageContainer: {
    height: 150,
    backgroundColor: COLORS.gray,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  details: {
    padding: SIZES.medium,
  },
  title: {
    fontSize: SIZES.body2,
    fontWeight: "bold",
    marginBottom: SIZES.small,
    color: COLORS.black,
  },
  price: {
    fontSize: SIZES.body2,
    color: COLORS.darkGray,
    marginBottom: SIZES.small,
  },
  totalPrice: {
    fontSize: SIZES.body2,
    fontWeight: "bold",
    paddingHorizontal: SIZES.medium,
    paddingBottom: SIZES.medium,
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGray,
    marginTop: SIZES.small,
  },
});

export default Orders;
