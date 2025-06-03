import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";
const styles = StyleSheet.create({
  flatListContent: {},
  flatList: {
    marginTop: 10,
    marginBottom: 30,
  },
  container: {
    height: "100%",
  },
  nofavorite: {
    marginTop: SIZES.large,
    textAlign: "center",
    fontSize: SIZES.large,
    fontWeight: "bold",
    color: COLORS.darkGray,
  },
  totalContainer: {
    height: 50,
    width: "90%",
    alignSelf: "center",
    position: "fixed",
    bottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  totalLabelText: {
    fontSize: 14,
    color: COLORS.darkGray,
  },
  totalText: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.black,
  },
  checkoutButton: {
    height: 50,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    backgroundColor: COLORS.primary,
    padding: 8,
    borderRadius: 8,
    elevation: 5,
  },
  checkoutButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "500",
    marginRight: SIZES.base,
  },
  badge: {
    backgroundColor: COLORS.white,
    width: 20,
    height: 20,
    borderRadius: 20,
    paddingHorizontal: SIZES.base,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default styles;
