import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%', // Ensures full width of the card within the ScrollView
    paddingHorizontal: SIZES.medium, // Adjust padding as needed
    marginBottom: SIZES.medium, // Adjust margin as needed
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
    overflow: 'hidden',
    marginBottom: SIZES.medium, // Adjust margin as needed
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: SIZES.small,
    overflow: 'hidden',
    backgroundColor: COLORS.gray2,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  details: {
    flex: 1,
    padding: SIZES.medium,
  },
  title: {
    fontFamily: 'bold',
    fontSize: SIZES.large,
    marginBottom: 2,
  },
  supplier: {
    fontFamily: 'regular',
    fontSize: SIZES.small,
    color: COLORS.gray,
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



