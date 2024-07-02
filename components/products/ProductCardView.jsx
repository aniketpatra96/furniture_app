// // import {
// //   ScrollView,
// //   StyleSheet,
// //   Image,
// //   View,
// //   TouchableOpacity,
// //   Text,
// // } from "react-native";
// // import React from "react";
// // import { COLORS, SIZES } from "../../constants";
// // import { Ionicons } from "@expo/vector-icons";
// // import { useNavigation } from "@react-navigation/native";
// // import styles from "./productCardView.style";
// // const ProductCardView = ({ item }) => {
// //   const navigation = useNavigation();
// //   return (
// //     <TouchableOpacity
// //       onPress={() => navigation.navigate("ProductDetails", { item })}
// //     >
// //       <View style={styles.container}>
// //         <View style={styles.imageContainer}>
// //           <Image
// //             source={{
// //               uri: item.image,
// //             }}
// //             style={styles.image}
// //           />
// //         </View>
// //         <View style={styles.details}>
// //           <Text style={styles.title} numberOfLines={1}>
// //             {item.name}
// //           </Text>
// //           <Text style={styles.supplier} numberOfLines={1}>
// //             {item.category}
// //           </Text>
// //           <Text style={styles.price}> ${item.price}</Text>
// //         </View>
// //         <TouchableOpacity style={styles.addBtn}>
// //           <Ionicons name="add-circle" size={35} color={COLORS.primary} />
// //         </TouchableOpacity>
// //       </View>
// //     </TouchableOpacity>
// //   );
// // };

// // export default ProductCardView;

// // import {
// //   ScrollView,
// //   StyleSheet,
// //   Image,
// //   View,
// //   TouchableOpacity,
// //   Text,
// // } from "react-native";
// // import React from "react";
// // import { COLORS, SIZES } from "../../constants";
// // import { Ionicons } from "@expo/vector-icons";
// // import { useNavigation } from "@react-navigation/native";
// // import styles from "./productCardView.style";
// // const ProductCardView = ({ item }) => {
// //   const navigation = useNavigation();
// //   return (
// //     <TouchableOpacity
// //       onPress={() => navigation.navigate("ProductDetails", { item })}
// //     >
// //       <View style={styles.container}>
// //         <View style={styles.imageContainer}>
// //           <Image
// //             source={{
// //               uri: item.image,
// //             }}
// //             style={styles.image}
// //           />
// //         </View>
// //         <View style={styles.details}>
// //           <Text style={styles.title} numberOfLines={1}>
// //             {item.name}
// //           </Text>
// //           <Text style={styles.supplier} numberOfLines={1}>
// //             {item.category}
// //           </Text>
// //           <Text style={styles.price}> ${item.price}</Text>
// //         </View>
// //         <TouchableOpacity style={styles.addBtn}>
// //           <Ionicons name="add-circle" size={35} color={COLORS.primary} />
// //         </TouchableOpacity>
// //       </View>
// //     </TouchableOpacity>
// //   );
// // };

// // export default ProductCardView;

// import { View, Image, TouchableOpacity, Text } from "react-native";
// import React, { useContext } from "react";
// import { COLORS, SIZES } from "../../constants";
// import { Ionicons } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";
// import styles from "./productCardView.style";
// // import addToCart, { removeFromCart } from "../../utils/handleCart";
// import { cartContext } from "../../contexts/cartContext";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// const ProductCardView = ({ item, isCart = false }) => {
//   const navigation = useNavigation();
//   const { addToCart, removeFromCart } = useContext(cartContext);
//   const handleCart = () => {
//     addToCart(item);
//   };
//   const removeCart = () => {
//     removeFromCart(item,item._id);
//   };
//   return (
//     <TouchableOpacity
//       onPress={() => navigation.navigate("ProductDetails", { item })}
//     >
//       <View style={styles.container}>
//         <View style={styles.imageContainer}>
//           <Image source={{ uri: item.image }} style={styles.image} />
//         </View>
//         <View style={styles.details}>
//           <Text style={styles.title} numberOfLines={1}>
//             {item.name}
//           </Text>
//           <Text style={styles.price}>${item.price}</Text>
//         </View>
//         <TouchableOpacity
//           onPress={isCart ? removeCart : handleCart}
//           style={styles.addBtn}
//         >
//           {isCart ? (
//               <MaterialCommunityIcons
//                 name="minus-circle"
//                 size={35}
//                 color={COLORS.red}
//               />
//           ) : (
//             <Ionicons name="add-circle" size={35} color={COLORS.primary} />
//           )}
//         </TouchableOpacity>
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default ProductCardView;

import { View, Image, TouchableOpacity, Text } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { COLORS } from "../../constants";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./productCardView.style";
import { cartContext } from "../../contexts/cartContext";

const ProductCardView = ({ item, isCart = false }) => {
  const navigation = useNavigation();
  const { cart, addToCart, removeFromCart, count, setCount } =
    useContext(cartContext);
  const [counter, setCounter] = useState(1);
  const [totalPrice, setTotalPrice] = useState(item.price);

  useEffect(() => {
    setTotalPrice((item.price * count).toFixed(2)); // Update total price whenever count changes
  }, [count, item.price]);

  const increment = () => {
    if (isCart) setCount((prev) => prev + 1);
    setCounter((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (isCart && count > 1) setCount((prev) => prev - 1);

    if (counter > 1) {
      setCounter((prevCount) => prevCount - 1);
    }
  };

  const handleCart = () => {
    setCount(counter);
    addToCart(cart, item, count);
  };

  const removeCart = () => {
    removeFromCart(cart, item, item._id);
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
        {isCart && (
          <View style={styles.counterContainer}>
            <TouchableOpacity onPress={decrement}>
              <Ionicons name="remove-circle" size={35} color={COLORS.red} />
            </TouchableOpacity>
            <Text style={styles.counterText}>{isCart && counter}</Text>
            <TouchableOpacity onPress={increment}>
              <Ionicons name="add-circle" size={35} color={COLORS.primary} />
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity
          onPress={isCart ? removeCart : handleCart}
          style={styles.cartButton}
        >
          <Text style={styles.cartButtonText}>
            {isCart ? "Remove from Cart" : "Add to Cart"}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;
