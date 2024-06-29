import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
    overflow: 'hidden',
    marginBottom: SIZES.medium,
  },
  imageContainer: {
    width: '100%',
    height: 150, // Adjust based on your design
    backgroundColor: COLORS.gray2,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  details: {
    padding: SIZES.small,
  },
  title: {
    fontFamily: 'bold',
    fontSize: SIZES.large,
    marginBottom: 2,
  },
  price: {
    fontFamily: 'bold',
    fontSize: SIZES.medium,
  },
  addBtn: {
    position: 'absolute',
    bottom: SIZES.xSmall,
    right: SIZES.xSmall,
  },
});

export default styles;



