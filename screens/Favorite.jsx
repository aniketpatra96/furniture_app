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
import axios from "axios";
import ProductCardView from "../components/products/ProductCardView";
import { favoriteContext } from "../contexts/favoriteContext";
export default function Favorite() {
  const { favorite } = useContext(favoriteContext);
  return (
    <SafeAreaView>
      {favorite.favorite.length === 0 ? (
        <Text style={styles.nofavorite}>No favorites</Text>
      ) : (
        <FlatList
          style={styles.flatList}
          data={favorite.favorite}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <ProductCardView item={item} />
            </View>
          )}
          numColumns={1} // Set to 1 for one card per row
          contentContainerStyle={styles.flatListContent}
        />
      )}
    </SafeAreaView>
  );
}
