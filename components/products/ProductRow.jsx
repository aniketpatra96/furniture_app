// import {
//   ScrollView,
//   StyleSheet,
//   FlatList,
//   Text,
//   View,
//   ActivityIndicator,
// } from "react-native";
// import React from "react";
// import { COLORS, SIZES } from "../../constants";
// import ProductCardView from "./ProductCardView";
// import useFetch from "../../hook/useFetch";

// export default function ProductRow() {
//   const { data, isLoading, error } = useFetch();
//   return (
//     <View style={{ marginTop: SIZES.medium }}>
//       {isLoading ? (
//         <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
//       ) : error ? (
//         <Text>Something went wrong !!</Text>
//       ) : (
//         <FlatList
//           data={data}
//           keyExtractor={(item) => item._id}
//           renderItem={({ item }) => <ProductCardView item={item} />}
//           horizontal
//           contentContainerStyle={{ columnGap: SIZES.medium }}
//         />
//       )}
//     </View>
//   );
// }

import { FlatList, Text, View, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES } from "../../constants";
import ProductCardView from "./ProductCardView";
import useFetch from "../../hook/useFetch";
import styles from "./productRow.style";

const ProductRow = () => {
  const { data, isLoading, error } = useFetch();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleLoadMore = () => {
    if (currentPage * itemsPerPage < data.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginatedData = data.slice(0, currentPage * itemsPerPage);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>Something went wrong!!</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={{ marginBottom: 150 }}
      data={paginatedData}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <ProductCardView item={item} />
        </View>
      )}
      numColumns={1} // Ensure one card per row
      contentContainerStyle={styles.flatListContent}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
    />
  );
};

export default ProductRow;
