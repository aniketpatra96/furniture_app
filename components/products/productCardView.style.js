import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    elevation: 5,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
    overflow: "hidden",
    marginBottom: SIZES.medium,
  },
  imageContainer: {
    width: "100%",
    height: 150,
    backgroundColor: COLORS.gray2,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  details: {
    padding: SIZES.medium,
  },
  title: {
    fontFamily: "bold",
    fontSize: 18,
    marginBottom: 2,
  },
  price: {
    fontFamily: "bold",
    fontSize: SIZES.medium,
  },
  addBtn: {
    position: "absolute",
    bottom: SIZES.xSmall,
    right: SIZES.xSmall,
  },
  //
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  counterText: {
    marginHorizontal: 20,
    fontSize: SIZES.medium,
    fontWeight: "bold",
    color: COLORS.dark,
  },
  cartButton: {
    backgroundColor: COLORS.primary,
    padding: 12,
    borderBottomRightRadius: SIZES.small,
    borderBottomLeftRadius: SIZES.small,
    alignItems: "center",
    justifyContent: "center",
  },
  cartButtonText: {
    color: COLORS.lightWhite,
    fontSize: SIZES.medium,
    fontWeight: "bold",
  },
});

export default styles;
