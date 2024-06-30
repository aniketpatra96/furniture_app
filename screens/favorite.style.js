import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";
const styles = StyleSheet.create({
  flatListContent: {},
  flatList: {
    marginTop: 10,
  },
  nofavorite: {
    marginTop: SIZES.large,
    textAlign: "center",
    fontSize: SIZES.large,
    fontFamily: "bold",
    color: COLORS.darkGray,
    marginTop: SIZES.large,
  },
});

export default styles;
