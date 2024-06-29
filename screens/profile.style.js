import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  cover: {
    height: 290,
    width: "100%",
    resizeMode: "cover",
  },
  profileContainer: {
    alignItems: "center",
    paddingBottom: SIZES.large,
  },
  profile: {
    height: 155,
    width: 155,
    borderRadius: 999,
    borderColor: COLORS.primary,
    borderWidth: 2,
    resizeMode: "cover",
    marginTop: -90,
  },
  name: {
    fontFamily: "bold",
    color: COLORS.primary,
    marginVertical: 5,
  },
  loginBtn: {
    backgroundColor: COLORS.secondary,
    padding: 8,
    borderWidth: 0.4,
    borderColor: COLORS.primary,
    borderRadius: SIZES.xxLarge,
    marginTop: SIZES.medium,
  },
  menuText: {
    fontFamily: "regular",
    color: COLORS.gray,
    marginLeft: 20,
    fontSize: 16,
  },
  menuWrapper: {
    marginTop: SIZES.medium,
    width: "100%",
    backgroundColor: COLORS.lightWhite,
    borderRadius: 12,
    paddingHorizontal: SIZES.medium,
  },
  menuItem: (borderBottomWidth) => ({
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth,
    borderBottomColor: COLORS.gray,
  }),
});

export default styles;
