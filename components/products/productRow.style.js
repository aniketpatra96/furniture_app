import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container:{
    marginBottom: 150
  },
  flatListContent: {
    paddingHorizontal: SIZES.medium,
    paddingBottom: SIZES.large,
    marginBottom: 100,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
  },
  card: {
    flex: 1,
    marginVertical: SIZES.small,
    marginBottom: 20,
  },
  infiniteScrollSpinner: {
    marginVertical: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
  },
});

export default styles;
