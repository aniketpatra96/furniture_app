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

  return (
    <View style={{ marginTop: SIZES.medium, paddingHorizontal: SIZES.medium }}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : error ? (
        <Text>Something went wrong !!</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <ProductCardView item={item} />}
          contentContainerStyle={styles.flatListContent}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};


export default ProductRow;



