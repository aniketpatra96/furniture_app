import { View, TouchableOpacity, Text, FlatList } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./favorite.style";
import { COLORS, SIZES } from "../constants";
import ProductCardView from "../components/products/ProductCardView";
import { cartContext } from "../contexts/cartContext";

export default function Favorite() {
  const { cart } = useContext(cartContext);

  // Calculate the total price of the items in the cart
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <SafeAreaView style={styles.container}>
      {cart.length === 0 ? (
        <Text style={styles.nofavorite}>No Items in Cart</Text>
      ) : (
        <>
          <Text style={styles.nofavorite}>My Cart</Text>
          <FlatList
            style={styles.flatList}
            data={cart}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <ProductCardView isCart={true} item={item} />
              </View>
            )}
            numColumns={1}
            contentContainerStyle={styles.flatListContent}
          />
          <View style={styles.totalContainer}>
            <View>
              <Text style={styles.totalLabelText}>Total Amount</Text>
              <Text style={styles.totalText}>
                ${calculateTotalPrice().toFixed(2)}
              </Text>
            </View>
            <TouchableOpacity style={styles.checkoutButton}>
              <Text style={styles.checkoutButtonText}>Check Out</Text>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{cart.length}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}
