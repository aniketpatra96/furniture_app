import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    marginBottom: SIZES.medium,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
    overflow: 'hidden',
    height: 200, // Adjust height as needed for medium size
  },
  imageContainer: {
    width: 120,
    height: '100%',
    borderRadius: SIZES.small,
    overflow: 'hidden',
    backgroundColor: COLORS.gray2,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    padding: SIZES.medium,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'bold',
    fontSize: SIZES.medium,
    marginBottom: SIZES.small,
  },
  price: {
    fontFamily: 'bold',
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
  addBtn: {
    position: 'absolute',
    bottom: SIZES.small,
    right: SIZES.small,
  },
});


export default styles;



