import { Text, View, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./search.style";
import { COLORS, SIZES } from "../constants";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import useSearch from "../hook/useSearch";
// import useFetch from "../hook/useFetch";
import axios from "axios";
export default function Search() {
  const navigation = useNavigation();
  const [search,setSearch] = useState("");
  console.log(search);
  const handleSearch = async() => {
     const response = await axios.get(
      `http://192.168.29.146:3000/api/products/search/${search}`
    );
    console.log(response.data);
  }
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons name="camera-outline" size={SIZES.xLarge} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={search}
            onPressIn={() => {}}
            onChangeText={(item) => setSearch(item)}
            placeholder="What are you looking for?"
          />
        </View>
        <View>
          <TouchableOpacity onPress={handleSearch} style={styles.searchBtn}>
            <Feather 
            name="search" 
            size={24}
              color={COLORS.offwhite}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
