import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import axios from "axios";
import { userContext } from "../contexts/userContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../constants";
import { backend_url } from "../backend_url";
const Orders = () => {
  const { user, token } = useContext(userContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders(user._id);
  }, [user._id]);

  const fetchOrders = async (userId) => {
    try {
      console.log(userId);
      const response = await axios.get(`${backend_url}/orders/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        console.log(response.data)
        setOrders(response.data);
      } else {
        console.error("Unable to fetch orders");
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const renderProductItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => handleOrderDetails(item)}
        style={styles.orderCard}
      >
        <View style={styles.orderHeader}>
          <Text style={styles.orderStatus}>preparing shipment</Text>
          <Text style={styles.orderDate}>
            {new Date(item.createdAt).toLocaleDateString()}
          </Text>
        </View>
        {item.products.map((product) => (
          <View key={product._id} style={styles.productContainer}>
            <Image
              source={{ uri: product.productImage }}
              style={styles.productImage}
            />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{product.productName}</Text>
              <Text style={styles.productPrice}>${product.productPrice}</Text>
              <Text style={styles.productQuantity}>
                Qty: {product.quantity}
              </Text>
            </View>
          </View>
        ))}
        <View style={styles.orderFooter}>
          <Text style={styles.totalAmount}>
            Total Amount : ${item.totalPrice}
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
  orderCard: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    marginBottom: SIZES.medium,
    padding: SIZES.medium,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 2,
  },
  orderHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: SIZES.small,
  },
  orderStatus: {
    fontSize: SIZES.body2,
    fontWeight: "bold",
    color: "#1A5319",
  },
  orderDate: {
    fontSize: SIZES.body3,
    color: COLORS.gray,
  },
  productContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SIZES.small,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: SIZES.small,
    marginRight: SIZES.medium,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: SIZES.body2,
    fontWeight: "bold",
    color: COLORS.black,
  },
  productPrice: {
    fontSize: SIZES.body3,
    color: COLORS.darkGray,
  },
  productQuantity: {
    fontSize: SIZES.body3,
    color: COLORS.darkGray,
  },
  orderFooter: {
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGray,
    paddingTop: SIZES.small,
    marginTop: SIZES.small,
  },
  totalAmount: {
    fontSize: SIZES.body2,
    fontWeight: "bold",
    color: COLORS.black,
  },
});

export default Orders;
