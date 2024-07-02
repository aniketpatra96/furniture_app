import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from "../../constants";
const styles = StyleSheet.create({
    container:{
        marginTop: SIZES.medium,
        marginBottom: -SIZES.xSmall,
        marginHorizontal: 12
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    headerTitle:{
        fontFamily:"semibold",
        fontSize: SIZES.xLarge-2,
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      },
      modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
      },
      button: {
        marginVertical: 5, // Add vertical margin to space out the buttons
      },
    
})

export default styles;