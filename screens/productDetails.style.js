// import { StyleSheet } from 'react-native'
// import { COLORS, SIZES } from "../constants/index";

// const styles = StyleSheet.create({
//     container: {
//       fkex: 1,
//       backgroundColor: COLORS.lightWhite,
//     },
//     upperRow: {
//       marginHorizontal: 20,
//       flexDirection: "row",
//       justifyContent: "space-between",
//       alignItems: "center",
//       position: "absolute",
//       top: SIZES.xxLarge,
//       width: SIZES.width - 44,
//       zIndex: 999,
//     },
//     image: {
//       aspectRatio: 1,
//       resizeMode: "cover",
//     },
//     details: {
//       marginTop: -SIZES.large,
//       backgroundColor: COLORS.lightWhite,
//       wifth: SIZES.width,
//       borderTopLeftRadius: SIZES.medium,
//       borderTopRightRadius: SIZES.medium,
//     },
//     titleRow: {
//       marginHorizontal: 0,
//       paddingBottom: SIZES.small,
//       flexDirection: "row",
//       justifyContent: "space-between",
//       alignItems: "center",
//       width: SIZES.width - 75,
//       top: 20,
//     },
//     ratingRow: {
//       paddingBottom: SIZES.small,
//       flexDirection: "row",
//       justifyContent: "space-between",
//       alignItems: "center",
//       width: SIZES.width - 10,
//       top: 5,
//     },
//     rating: {
//       top: SIZES.large,
//       flexDirection: "row",
//       justifyContent: "flex-start",
//       alignItems: "center",
//       marginHorizontal: SIZES.large,
//     },
//     ratingText: {
//       color: COLORS.gray,
//       fontFamily: "medium",
//       paddingHorizontal: SIZES.xSmall,
//     },
//     title: {
//       fontFamily: "semibold",
//       fontSize: SIZES.large,
//     },
//     price: {
//       padding: 10,
//       fontFamily: "semibold",
//       fontSize: SIZES.large,
//     },
//     priceWrapper: {
//       backgroundColor: COLORS.secondary,
//       borderRadius: SIZES.large,
//     },
//     descriptionWrapper: {
//       marginTop: SIZES.large * 2,
//       marginHorizontal: SIZES.large,
//     },
//     description: {
//       fontFamily: "medium",
//       fontSize: SIZES.large,
//     },
//     descText: {
//       fontFamily: "regular",
//       fontSize: SIZES.small,
//       textAlign: "justify",
//       marginBottom: SIZES.small,
//     },
//     location: {
//       flexDirection: "row",
//       justifyContent: "space-between",
//       alignItems: "center",
//       backgroundColor: COLORS.secondary,
//       padding: 5,
//       borderRadius: SIZES.large,
//       marginHorizontal: 12,
//     },
//     cartRow: {
//       paddingBottom: SIZES.small,
//       flexDirection: "row",
//       justifyContent: "space-between",
//       alignItems: "center",
//       width: SIZES.width,
//     },
//     cartBtn: {
//       width: SIZES.width * 0.7,
//       backgroundColor: "black",
//       padding: SIZES.small / 2,
//       borderRadius: SIZES.large,
//       marginLeft: 12,
//     },
//     cartTitle: {
//       marginLeft: SIZES.small,
//       fontFamily: "semibold",
//       fontSize: SIZES.medium,
//       color: COLORS.lightWhite,
//     },
//     addCart: {
//       width: 37,
//       height: 37,
//       borderRadius: 50,
//       margin: SIZES.small,
//       backgroundColor: "black",
//       alignItems: "center",
//       justifyContent: "center",
//     },
//   });
//   export default styles



import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  upperRow: {
    paddingHorizontal: SIZES.base,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: SIZES.statusBarHeight + 10,
    width: '100%',
    zIndex: 999,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderBottomLeftRadius: SIZES.radius * 2,
    borderBottomRightRadius: SIZES.radius * 2,
  },
  details: {
    backgroundColor: COLORS.lightGray2,
    marginTop: -30,
    borderTopLeftRadius: SIZES.radius * 2,
    borderTopRightRadius: SIZES.radius * 2,
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SIZES.base,
  },
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: SIZES.h2,
    color: COLORS.black,
  },
  priceWrapper: {
    backgroundColor: COLORS.secondary,
    paddingHorizontal: SIZES.radius,
    paddingVertical: SIZES.base,
    borderRadius: SIZES.radius,
    marginTop: SIZES.base,
  },
  price: {
    fontFamily: 'Roboto-Bold',
    fontSize: SIZES.body3,
    color: COLORS.white,
  },
  ratingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SIZES.base,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body4,
    color: COLORS.gray,
    marginLeft: SIZES.base / 2,
  },
  descriptionWrapper: {
    marginTop: SIZES.padding,
  },
  description: {
    fontFamily: 'Roboto-Bold',
    fontSize: SIZES.body2,
    color: COLORS.black,
    marginBottom: SIZES.base / 2,
  },
  descText: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body3,
    color: COLORS.darkGray,
    lineHeight: 22,
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.lightGray,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.base,
    borderRadius: SIZES.radius,
    marginTop: SIZES.base,
  },
  cartRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZES.padding,
    paddingHorizontal: SIZES.padding,
  },
  cartBtn: {
    backgroundColor: COLORS.primary,
    paddingVertical: SIZES.base,
    paddingHorizontal: SIZES.radius * 2,
    borderRadius: SIZES.radius,
  },
  cartTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: SIZES.body3,
    color: COLORS.white,
  },
  addCart: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;

