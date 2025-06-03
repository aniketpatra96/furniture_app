import {
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Keyboard,
} from "react-native";
import React, { useState, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./search.style";
import { COLORS, SIZES } from "../constants";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import ProductCardView from "../components/products/ProductCardView";
import Toast from "react-native-toast-message";
import { backend_url } from "../backend_url";
import { userContext } from "../contexts/userContext";

export default function Search() {
  // const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]); // State to hold search results
  const { token } = useContext(userContext);
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `${backend_url}/api/products/search/${search}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log('====================================');
      // console.log(response.data);
      // console.log('====================================');
      if (response.status === 200) setSearchResults(response.data);
      else {
        // console.log("No products found!");
        Toast.show({
          type: "error",
          text1: "No products found!",
          position: "top",
        });
        setSearchResults([]);
      }
    } catch (error) {
      console.error(error);
      Toast.show({
        type: "error",
        text1: "Error occurred in searching products!",
        position: "top",
      });
      setSearchResults([]);
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
