import React, { useContext, useState } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { COLORS, SIZES } from "../constants/index";
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";
import styles from "./productDetails.style";
import { favoriteContext } from "../contexts/favoriteContext";
import { FAVORITE_ACTIONS } from "../Reducers/favorite.reducer";
import { cartContext } from "../contexts/cartContext";
import addToCart from "../utils/handleCart";
const ProductDetails = ({ navigation }) => {
  const { height, width } = useWindowDimensions();
  const route = useRoute();
  const { item } = route.params;
  const [count, setCount] = useState(1);
  const { favorite, dispatch } = useContext(favoriteContext);
  const [isFavorite, setIsFavorite] = useState(
    favorite.favorite.some((product) => product._id === item._id)
  );
  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    if (count > 1) {
      setCount((count) => count - 1);
    }
  };
  const handleAddToFavorite = () => {
    setIsFavorite((isFavorite) => !isFavorite);
    if (isFavorite) {
      dispatch({
        type: FAVORITE_ACTIONS.REMOVE_FROM_FAVORITE,
        payload: item._id,
      });
    } else {
      dispatch({
        type: FAVORITE_ACTIONS.ADD_TO_FAVORITE,
        payload: item,
      });
    }
  };
  const context = useContext(cartContext);
  const handleCart = () => {
    addToCart(context.dispatch, item);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAddToFavorite}>
          <Ionicons
            name="heart"
            size={30}
            color={isFavorite ? COLORS.red : COLORS.gray}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1 }}>
        <Image
          source={{
            uri: item.image,
          }}
          style={styles.image}
        />

        <View style={styles.details}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{item.name}</Text>
            <View style={styles.priceWrapper}>
              <Text style={styles.price}>${item.price}</Text>
            </View>
          </View>

          <View style={styles.ratingRow}>
            <View style={styles.rating}>
              {[1, 2, 3, 4, 5].map((index) => (
                <Ionicons key={index} name="star" size={24} color="gold" />
              ))}
              <Text style={styles.ratingText}>(4.9)</Text>
            </View>

            <View style={styles.rating}>
              <TouchableOpacity onPress={increment}>
                <SimpleLineIcons name="plus" size={20} />
              </TouchableOpacity>
              <Text style={styles.ratingText}>{count}</Text>
              <TouchableOpacity onPress={decrement}>
                <SimpleLineIcons name="minus" size={20} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.descriptionWrapper}>
            <Text style={styles.description}>Description</Text>
            <Text style={styles.descText}>{item.content}</Text>
          </View>

          <View style={{ marginBottom: SIZES.small }}>
            <View style={styles.location}>
              <View style={{ flexDirection: "row" }}>
                <Ionicons name="location-outline" size={20} />
                <Text> India </Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <MaterialCommunityIcons
                  name="truck-delivery-outline"
                  size={20}
                />
                <Text> Free Delivery </Text>
              </View>
            </View>
          </View>

          <View style={styles.cartRow}>
            <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
              <Text style={styles.cartTitle}>BUY NOW</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCart} style={styles.addCart}>
              <Fontisto
                name="shopping-bag"
                size={22}
                color={COLORS.lightWhite}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;
