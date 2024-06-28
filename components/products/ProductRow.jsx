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



import {
  ScrollView,
  StyleSheet,
  FlatList,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants";
import ProductCardView from "./ProductCardView";
import useFetch from "../../hook/useFetch";
import styles from "./productRow.style";
const ProductRow = () => {
  const { data, isLoading, error } = useFetch();

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
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {data.map((item) => (
        <ProductCardView key={item._id} item={item} />
      ))}
    </ScrollView>
  );
};



export default ProductRow;

