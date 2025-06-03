import { View, Image, TouchableOpacity, Text } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { COLORS } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./productCardView.style";
import { cartContext } from "../../contexts/cartContext";

const ProductCardView = ({ item, isCart = false }) => {
  const navigation = useNavigation();
  const { addToCart, removeFromCart, updateQuantity } = useContext(cartContext);
  const [counter, setCounter] = useState(item.quantity || 1);

  useEffect(() => {
    if (isCart) {
      updateQuantity(item._id, counter);
    }
  }, [counter]);

  const increment = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (counter > 1) {
      setCounter((prevCount) => prevCount - 1);
    }
  };

  const handleCart = () => {
    addToCart(item, counter);
  };

  const removeCart = () => {
    removeFromCart(item._id);
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
            <Text style={styles.counterText}>{counter}</Text>
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
