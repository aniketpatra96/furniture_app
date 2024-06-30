import {
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Keyboard,
  Text,
} from "react-native";
import React, { useState, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./favorite.style";
import { COLORS, SIZES } from "../constants";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ProductCardView from "../components/products/ProductCardView";
import { cartContext } from "../contexts/cartContext";
export default function Favorite() {
  const { cart } = useContext(cartContext);
  return (
    <SafeAreaView>
      {cart.cart.length === 0 ? (
        <Text style={styles.nofavorite}>No Items in Cart</Text>
      ) : (
        <FlatList
          style={styles.flatList}
          data={cart.cart}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <ProductCardView isCart={true} item={item} />
            </View>
          )}
          numColumns={1} // Set to 1 for one card per row
          contentContainerStyle={styles.flatListContent}
        />
      )}
    </SafeAreaView>
  );
}
