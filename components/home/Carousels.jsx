import React, { useState, useEffect, useRef } from "react";
import { Text, View, ScrollView, Image, Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const { width } = Dimensions.get("window");

const images = [
  require("../../assets/images/fn1.jpg"),
  require("../../assets/images/fn2.jpg"),
  require("../../assets/images/fn3.jpg"),
];

const Carousel = () => {
  const [active, setActive] = useState(0);
  const scrollViewRef = useRef(null);

  const change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== active) {
      setActive(slide);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevActive) => {
        const nextIndex = (prevActive + 1) % images.length;
        scrollViewRef.current.scrollTo({
          x: nextIndex * width,
          animated: true,
        });
        return nextIndex;
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{ position: "relative" }}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={change}
        style={{ width, height: 200 }}
      >
        {images.map((image, index) => (
          <Image key={index} source={image} style={{ width, height: 200 }} />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <Text
            key={index}
            style={[index === active ? styles.dotActive : styles.dot, { fontSize: 35 }]}
          >
            •
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },
  dot: {
    color: "#fff",
    margin: 3,
  },
  dotActive: {
    color: COLORS.primary,
    margin: 3,
  },
});

export default Carousel;
