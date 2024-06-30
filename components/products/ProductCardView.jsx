// import {
//   ScrollView,
//   StyleSheet,
//   Image,
//   View,
//   TouchableOpacity,
//   Text,
// } from "react-native";
// import React from "react";
// import { COLORS, SIZES } from "../../constants";
// import { Ionicons } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";
// import styles from "./productCardView.style";
// const ProductCardView = ({ item }) => {
//   const navigation = useNavigation();
//   return (
//     <TouchableOpacity
//       onPress={() => navigation.navigate("ProductDetails", { item })}
//     >
//       <View style={styles.container}>
//         <View style={styles.imageContainer}>
//           <Image
//             source={{
//               uri: item.image,
//             }}
//             style={styles.image}
//           />
//         </View>
//         <View style={styles.details}>
//           <Text style={styles.title} numberOfLines={1}>
//             {item.name}
//           </Text>
//           <Text style={styles.supplier} numberOfLines={1}>
//             {item.category}
//           </Text>
//           <Text style={styles.price}> ${item.price}</Text>
//         </View>
//         <TouchableOpacity style={styles.addBtn}>
//           <Ionicons name="add-circle" size={35} color={COLORS.primary} />
//         </TouchableOpacity>
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default ProductCardView;

// import {
//   ScrollView,
//   StyleSheet,
//   Image,
//   View,
//   TouchableOpacity,
//   Text,
// } from "react-native";
// import React from "react";
// import { COLORS, SIZES } from "../../constants";
// import { Ionicons } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";
// import styles from "./productCardView.style";
// const ProductCardView = ({ item }) => {
//   const navigation = useNavigation();
//   return (
//     <TouchableOpacity
//       onPress={() => navigation.navigate("ProductDetails", { item })}
//     >
//       <View style={styles.container}>
//         <View style={styles.imageContainer}>
//           <Image
//             source={{
//               uri: item.image,
//             }}
//             style={styles.image}
//           />
//         </View>
//         <View style={styles.details}>
//           <Text style={styles.title} numberOfLines={1}>
//             {item.name}
//           </Text>
//           <Text style={styles.supplier} numberOfLines={1}>
//             {item.category}
//           </Text>
//           <Text style={styles.price}> ${item.price}</Text>
//         </View>
//         <TouchableOpacity style={styles.addBtn}>
//           <Ionicons name="add-circle" size={35} color={COLORS.primary} />
//         </TouchableOpacity>
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default ProductCardView;

import { View, Image, TouchableOpacity, Text } from "react-native";
import React, { useContext } from "react";
import { COLORS, SIZES } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./productCardView.style";
import addToCart, { removeFromCart } from "../../utils/handleCart";
import { cartContext } from "../../contexts/cartContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const ProductCardView = ({ item, isCart = false }) => {
  const navigation = useNavigation();
  const { dispatch } = useContext(cartContext);
  const handleCart = () => {
    addToCart(dispatch, item);
  };
  const removeCart = () => {
    removeFromCart(dispatch, item._id);
  };
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetails", { item })}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
        <TouchableOpacity
          onPress={isCart ? removeCart : handleCart}
          style={styles.addBtn}
        >
          {isCart ? (
              <MaterialCommunityIcons
                name="minus-circle"
                size={35}
                color={COLORS.red}
              />
          ) : (
            <Ionicons name="add-circle" size={35} color={COLORS.primary} />
          )}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;
