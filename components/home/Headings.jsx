import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, Button } from "react-native";
import { COLORS } from "../../constants";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useCols } from "../../contexts/numCols";
import styles from "./headings.style";

export default function Headings({ onSort, toggleView, isGrid }) {
  const { numOfCols, setNumOfCols } = useCols();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleList = () => {
    setNumOfCols(numOfCols === 2 ? 1 : 2);
    // toggleView(); // Toggle between grid and list view
  };

  const handleSort = (order) => {
    onSort(order);
    setIsModalVisible(false); // Close the modal after sorting
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <FontAwesome5 name="filter" size={24} color={COLORS.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}> New Arrivals</Text>
        <TouchableOpacity onPress={toggleList}>
          {isGrid ? (
            <Ionicons name="grid" size={24} color={COLORS.primary} />
          ) : (
            <FontAwesome5 name="list" size={24} color={COLORS.primary} />
          )}
        </TouchableOpacity>
      </View>
      
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Sort by Price</Text>
            <View style={styles.button}>
              <Button title="Low to High" onPress={() => handleSort("lowToHigh")} color={COLORS.primary} />
            </View>
            <View style={styles.button}>
              <Button title="High to Low" onPress={() => handleSort("highToLow")} color={COLORS.primary} />
            </View>
            <View style={styles.button}>
              <Button title="Cancel" onPress={() => setIsModalVisible(false)} color={COLORS.red} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
