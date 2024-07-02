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

// import { FlatList, Text, View, ActivityIndicator } from "react-native";
// import React, { useState } from "react";
// import { COLORS, SIZES } from "../../constants";
// import ProductCardView from "./ProductCardView";
// import useFetch from "../../hook/useFetch";
// import styles from "./productRow.style";

// const ProductRow = () => {
//   const { data, isLoading, error } = useFetch();
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   const handleLoadMore = () => {
//     if (currentPage * itemsPerPage < data.length) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const paginatedData = data.slice(0, currentPage * itemsPerPage);

//   if (isLoading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color={COLORS.primary} />
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View style={styles.errorContainer}>
//         <Text>Something went wrong!!</Text>
//       </View>
//     );
//   }

//   return (
//     <FlatList
//       style={{ marginBottom: 150 }}
//       data={paginatedData}
//       keyExtractor={(item) => item._id}
//       renderItem={({ item }) => (
//         <View style={styles.card}>
//           <ProductCardView item={item} />
//         </View>
//       )}
//       numColumns={1} // Ensure one card per row
//       contentContainerStyle={styles.flatListContent}
//       onEndReached={handleLoadMore}
//       onEndReachedThreshold={0.5}
//     />
//   );
// };

// export default ProductRow;


// import React, { useState, useEffect } from "react";
// import { View, FlatList, ActivityIndicator, Text, TouchableOpacity } from "react-native";
// import { COLORS } from "../../constants";
// import ProductCardView from "./ProductCardView";
// import useFetch from "../../hook/useFetch";
// import styles from "./productRow.style";

// const ProductRow = () => {
//   const { data, isLoading, error, refetch } = useFetch(); // Using custom hook to fetch data
//   const [currentPage, setCurrentPage] = useState(1); // State to track current page number
//   const itemsPerPage = 5; // Number of items per page

//   useEffect(() => {
//     refetch(); // Fetch data initially
//   }, []);

//   const totalPages = Math.ceil(data.length / itemsPerPage); // Calculate total pages based on data length

//   const paginatedData = data.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   ); // Slice data based on current page and items per page

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => prevPage + 1); // Function to increment current page
//   };

//   const handlePrevPage = () => {
//     setCurrentPage((prevPage) => prevPage - 1); // Function to decrement current page
//   };

//   if (isLoading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color={COLORS.primary} />
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View style={styles.errorContainer}>
//         <Text>Something went wrong!!</Text>
//       </View>
//     );
//   }

//   return (
//     <View>
//       <FlatList
//         data={paginatedData}
//         keyExtractor={(item) => item._id}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <ProductCardView item={item} />
//           </View>
//         )}
//         numColumns={1} // Ensure one card per row
//         contentContainerStyle={styles.flatListContent}
//       />
//       <View style={styles.paginationContainer}>
//         <Text style={styles.paginationText}>
//           Page {currentPage} of {totalPages}
//         </Text>
//         <View style={styles.paginationButtons}>
//           <TouchableOpacity
//             style={[styles.paginationButton, currentPage === 1 && styles.disabled]}
//             onPress={handlePrevPage}
//             disabled={currentPage === 1}
//           >
//             <Text style={{ color: COLORS.primary }}>Previous</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[
//               styles.paginationButton,
//               currentPage === totalPages && styles.disabled,
//             ]}
//             onPress={handleNextPage}
//             disabled={currentPage === totalPages}
//           >
//             <Text style={{ color: COLORS.primary }}>Next</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default ProductRow;



import React, { useState, useEffect } from "react";
import { View, FlatList, ActivityIndicator, Text } from "react-native";
import { COLORS } from "../../constants";
import ProductCardView from "./ProductCardView";
import useFetch from "../../hook/useFetch";
import styles from "./productRow.style";

const ProductRow = () => {
  const { data, isLoading, error, refetch } = useFetch();
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const itemsPerPage = 5;

  useEffect(() => {
    refetch();
  }, []);

  const handleLoadMore = () => {
    if (currentPage * itemsPerPage < data.length) {
      setIsLoadingMore(true);
      setTimeout(() => {
        setCurrentPage((prevPage) => prevPage + 1);
        setIsLoadingMore(false);
      }, 1000);
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
      data={paginatedData}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <ProductCardView item={item} />
        </View>
      )}
      contentContainerStyle={styles.flatListContent}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        isLoadingMore && (
          <View style={styles.infiniteScrollSpinner}>
            <ActivityIndicator size="large" color={COLORS.primary} />
          </View>
        )
      }
    />
  );
};

export default ProductRow;
