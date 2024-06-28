// import { StyleSheet } from 'react-native'
// import { COLORS, SIZES } from "../../constants";

// const styles = StyleSheet.create({
//     container:{
//         width: 182,
//         height: 240,
//         marginTop: 5, 
//         marginBottom: 150,
//         borderRadius: SIZES.medium,
//         backgroundColor: COLORS.secondary
//     },
//     imageContainer:{
//         flex:1,
//         width: 170,
//         marginLeft: SIZES.small/2,
//         marginTop: SIZES.small/2,
//         borderRadius: SIZES.small,
//         overflow: "hidden",
//         backgroundColor: COLORS.gray2
//     },
//     image:{
//         aspectRatio: 1,
//         resizeMode: "cover"
//     }, 
//     details:{
//         padding: SIZES.small
//     },
//     title:{
//         fontFamily:"bold",
//         fontSize:SIZES.large,
//         marginBottom: 2
//     },
//     supplier:{
//         fontFamily:"regular",
//         fontSize:SIZES.small,
//         color: COLORS.gray
//     },
//     price:{
//         fontFamily:"bold",
//         fontSize:SIZES.medium,
//     },
//     addBtn:{
//         position:"absolute",
//         bottom:SIZES.xSmall,
//         right:SIZES.xSmall
//     }
   
// })

// export default styles;




import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

const styles = StyleSheet.create({
  touchable: {
    marginBottom: SIZES.medium,
    marginTop: SIZES.medium,
  },
  container: {
    width: '100%',
    height: 280,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.lightGray,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
    overflow: 'hidden',
    backgroundColor: COLORS.gray,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  details: {
    padding: SIZES.small,
    backgroundColor: COLORS.white,
    borderBottomLeftRadius: SIZES.medium,
    borderBottomRightRadius: SIZES.medium,
  },
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: SIZES.body2,
    marginBottom: SIZES.base,
    color: COLORS.black,
  },
  supplier: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body3,
    color: COLORS.gray,
    marginBottom: SIZES.base / 2,
  },
  price: {
    fontFamily: 'Roboto-Bold',
    fontSize: SIZES.body3,
    color: COLORS.primary,
    marginTop: SIZES.base / 2,
  },
  addBtn: {
    position: 'absolute',
    bottom: SIZES.base,
    right: SIZES.base,
  },
});

export default styles;
