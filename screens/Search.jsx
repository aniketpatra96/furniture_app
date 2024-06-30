import {
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./search.style";
import { COLORS, SIZES } from "../constants";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import ProductCardView from "../components/products/ProductCardView";
import { IP as ip } from "@env";

export default function Search() {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]); // State to hold search results

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://${ip}:3000/api/products/search/${search}`
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons
            name="camera-outline"
            size={SIZES.xLarge}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={search}
            onPressIn={() => {}}
            onChangeText={(text) => setSearch(text)}
            placeholder="What are you looking for?"
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              handleSearch();
              Keyboard.dismiss();
            }}
            style={styles.searchBtn}
          >
            <Feather name="search" size={24} color={COLORS.offwhite} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        style={styles.flatList}
        data={searchResults}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <ProductCardView item={item} />
          </View>
        )}
        numColumns={1} // Set to 1 for one card per row
        contentContainerStyle={styles.flatListContent}
      />
    </SafeAreaView>
  );
}
