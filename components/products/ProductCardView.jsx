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




import React from "react";
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  Platform,
} from "react-native";
import { COLORS } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ScrollView as NativeScrollView } from "react-native";
import styles from "./productCardView.style";

// For web, import ScrollView from react-native-web
let ScrollView = NativeScrollView;
if (Platform.OS === "web") {
  ScrollView = require("react-native-web").ScrollView;
}

const ProductCardView = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetails", { item })}
      style={styles.touchable}
    >
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: item.image,
              }}
              style={styles.image}
            />
          </View>
          <View style={styles.details}>
            <Text style={styles.title} numberOfLines={1}>
              {item.name}
            </Text>
            <Text style={styles.supplier} numberOfLines={1}>
              {item.category}
            </Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
          <TouchableOpacity style={styles.addBtn}>
            <Ionicons name="add-circle" size={35} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </TouchableOpacity>
  );
};

export default ProductCardView;
