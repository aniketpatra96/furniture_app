import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./headings.style";
import { COLORS } from "../../constants";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useCols } from "../../contexts/numCols";
export default function Headings() {
  const { numOfCols, setNumOfCols } = useCols();
  const toggleList = () => {
    setNumOfCols(numOfCols === 2 ? 1 : 2);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/**insert a modal here */}
        <TouchableOpacity onPress={() => {}}>
          <FontAwesome5 name="filter" size={24} color={COLORS.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}> New Arrivals</Text>
        <TouchableOpacity onPress={toggleList}>
          {numOfCols === 2 ? (
            <Ionicons name="grid" size={24} color={COLORS.primary} />
          ) : (
            <FontAwesome5 name="list" size={24} color={COLORS.primary} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
