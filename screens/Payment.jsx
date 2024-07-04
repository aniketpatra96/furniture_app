// import React, { useContext, useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   Alert,
//   StyleSheet,
//   ScrollView,
// } from "react-native";
// import { SIZES, COLORS } from "../constants";
// import BouncyCheckbox from "react-native-bouncy-checkbox";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { cartContext } from "../contexts/cartContext";
// import { userContext } from "../contexts/userContext";
// import axios from "axios";
// import { IP as ip } from "@env";
// const Payment = ({ navigation }) => {
//   const { cart, removeAllFromCart } = useContext(cartContext);
//   const { user } = useContext(userContext);
//   const [recipientName, setRecipientName] = useState(user.name);
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [address, setAddress] = useState("");
//   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
//   const fetchProfile = async (userId) => {
//     try {
//       const response = await axios.get(`http://${ip}:3000/profile/${userId}`);
//       if (response?.status === 200) {
//         setPhoneNumber(response?.data?.mobile);
//         setAddress(response?.data?.address);
//       }
//     } catch (error) {
//       console.error(error.message);
//     }
//   };
//   useEffect(() => {
//     fetchProfile(user._id);
//   }, [user._id]);
//   const paymentMethods = [
//     {
//       id: 1,
//       name: "Cash on delivery",
//     },
//     {
//       id: 2,
//       name: "UPI",
//     },
//     {
//       id: 3,
//       name: "Credit Card Or Debit",
//     },
//     {
//       id: 4,
//       name: "Net Banking",
//     },
//   ];

//   const calculateTotalPrice = () => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 0);
//   };
//   const createOrder = async () => {
//     let response = null;
//     try {
//       response = await axios.post(`http://${ip}:3000/orders/`, {
//         userId: user._id,
//         recipientName,
//         phoneNumber,
//         address,
//         paymentMethod: selectedPaymentMethod,
//         products: cart.map((item) => ({
//           productId: item._id,
//           productImage: item.image,
//           productName: item.name,
//           productPrice: item.price,
//           quantity: item.quantity,
//         })),
//         totalPrice: calculateTotalPrice().toFixed(2),
//       });
//       console.log(response.status);
//       if (response?.status === 201) {
//         Alert.alert("Success", "Order placed successfully!");
//         navigation.navigate("Bottom Navigation");
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   const handleContinue = () => {
//     if (!recipientName || !phoneNumber || !address || !selectedPaymentMethod) {
//       Alert.alert(
//         "Error",
//         "Please fill in all fields and select a payment method."
//       );
//       return;
//     }
//     removeAllFromCart();
//     createOrder();
//   };

//   const truncateText = (text, maxLength) => {
//     return text.length > maxLength
//       ? text.substring(0, maxLength) + "..."
//       : text;
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.header}>Check Out</Text>
//       <ScrollView
//         contentContainerStyle={styles.scrollViewContent}
//         showsVerticalScrollIndicator={false}
//       >
//         <View style={styles.section}>
//           <Text style={styles.sectionHeader}>Recipient Details</Text>
//           <TextInput
//             style={styles.input}
//             value={recipientName}
//             onChangeText={setRecipientName}
//             placeholder="Recipient's Name"
//           />
//           <TextInput
//             style={styles.input}
//             value={user.email}
//             editable={false}
//             placeholder="Email"
//           />
//           <TextInput
//             style={styles.input}
//             value={phoneNumber}
//             onChangeText={setPhoneNumber}
//             placeholder="Phone Number"
//             keyboardType="phone-pad"
//           />
//           <TextInput
//             style={styles.input}
//             value={address}
//             onChangeText={setAddress}
//             placeholder="Address"
//           />
//         </View>
//         <View style={styles.section}>
//           <Text style={styles.sectionHeader}>Payment method</Text>
//           {paymentMethods.map((method) => (
//             <View key={method.id} style={styles.paymentMethod}>
//               <BouncyCheckbox
//                 size={25}
//                 fillColor="green"
//                 isChecked={selectedPaymentMethod === method.id}
//                 text={method.name}
//                 onPress={() => setSelectedPaymentMethod(method.id)}
//                 textStyle={[
//                   styles.paymentMethodText,
//                   { textDecorationLine: "none" },
//                 ]}
//               />
//             </View>
//           ))}
//         </View>
//         <View style={styles.section}>
//           <Text style={styles.sectionHeader}>Cart Items</Text>
//           <FlatList
//             data={cart}
//             keyExtractor={(item) => item._id}
//             renderItem={({ item }) => (
//               <View style={styles.cartItem}>
//                 <Text style={styles.cartItemText}>
//                   {truncateText(item.name, 20)}
//                 </Text>
//                 <Text style={styles.cartItemText}>
//                   {item.quantity} x ${item.price.toFixed(2)}
//                 </Text>
//               </View>
//             )}
//             showsVerticalScrollIndicator={false}
//           />
//         </View>
//       </ScrollView>
//       <View style={styles.totalContainer}>
//         <View>
//           <Text style={styles.totalLabelText}>Total Amount</Text>
//           <Text style={styles.totalText}>
//             ${calculateTotalPrice().toFixed(2)}
//           </Text>
//         </View>
//         <TouchableOpacity
//           style={styles.checkoutButton}
//           onPress={handleContinue}
//         >
//           <Text style={styles.checkoutButtonText}>Place Order</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 5,
//     backgroundColor: "#EEEDEB",
//   },
//   scrollViewContent: {
//     padding: 10,
//   },
//   header: {
//     fontSize: SIZES.large,
//     fontWeight: "bold",
//     marginBottom: 10,
//     alignSelf: "center",
//   },
//   section: {
//     marginBottom: 20,
//     backgroundColor: "#ffffff",
//     padding: 8,
//     borderRadius: 8,
//     elevation: 4,
//   },
//   sectionHeader: {
//     marginBottom: SIZES.small,
//     fontSize: SIZES.medium,
//     fontWeight: "bold",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: COLORS.primary,
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//   },
//   paymentMethod: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   paymentMethodText: {
//     marginLeft: 10,
//     fontSize: SIZES.medium,
//     fontWeight: "500",
//   },

//   cartContainer: {
//     flex: 1,
//   },
//   cartItem: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingVertical: 10,
//   },
//   cartItemText: {
//     fontSize: SIZES.medium,
//     maxWidth: "45%",
//   },
//   totalContainer: {
//     height: 90,
//     width: "100%",
//     alignSelf: "center",
//     position: "fixed",
//     bottom: 0,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: 10,
//     backgroundColor: "#ffffff",
//   },
//   totalLabelText: {
//     fontSize: 14,
//     color: COLORS.darkGray,
//   },
//   totalText: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: COLORS.black,
//   },
//   checkoutButton: {
//     height: 50,
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: COLORS.primary,
//     padding: 8,
//     borderRadius: 8,
//     elevation: 5,
//   },
//   checkoutButtonText: {
//     color: COLORS.white,
//     fontSize: 18,
//     fontWeight: "500",
//   },
// });

// export default Payment;


import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SIZES, COLORS } from "../constants";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { SafeAreaView } from "react-native-safe-area-context";
import { cartContext } from "../contexts/cartContext";
import { userContext } from "../contexts/userContext";
import axios from "axios";
import { IP as ip } from "@env";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/FontAwesome";

const Payment = ({ navigation }) => {
  const { cart, removeAllFromCart } = useContext(cartContext);
  const { user } = useContext(userContext);
  const [recipientName, setRecipientName] = useState(user.name);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState("");

  const fetchProfile = async (userId) => {
    try {
      const response = await axios.get(`http://${ip}:3000/profile/${userId}`);
      if (response?.status === 200) {
        setPhoneNumber(response?.data?.mobile);
        setAddress(response?.data?.address);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchProfile(user._id);
  }, [user._id]);

  const paymentMethods = [
    {
      id: 1,
      name: "Cash on delivery",
    },
    {
      id: 2,
      name: "UPI",
    },
    {
      id: 3,
      name: "Credit Card Or Debit",
    },
    {
      id: 4,
      name: "Net Banking",
    },
  ];

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const createOrder = async () => {
    let response = null;
    try {
      response = await axios.post(`http://${ip}:3000/orders/`, {
        userId: user._id,
        recipientName,
        phoneNumber,
        address,
        paymentMethod: selectedPaymentMethod,
        products: cart.map((item) => ({
          productId: item._id,
          productImage: item.image,
          productName: item.name,
          productPrice: item.price,
          quantity: item.quantity,
        })),
        totalPrice: calculateTotalPrice().toFixed(2),
      });
      console.log(response.status);
      if (response?.status === 201) {
        setModalType("success");
        setModalMessage("Order placed successfully!");
        setModalVisible(true);
        removeAllFromCart();
        setTimeout(() => {
          setModalVisible(false);
          navigation.navigate("Bottom Navigation");
        }, 2000);
      }
    } catch (error) {
      console.error(error);
      setModalType("error");
      setModalMessage("Failed to place order. Please try again.");
      setModalVisible(true);
      setTimeout(() => {
        setModalVisible(false);
      }, 2000);
    }
  };

  const handleContinue = () => {
    if (!recipientName || !phoneNumber || !address || !selectedPaymentMethod) {
      setModalType("error");
      setModalMessage("Please fill in all fields and select a payment method.");
      setModalVisible(true);
      setTimeout(() => {
        setModalVisible(false);
      }, 2000);
      return;
    }
    createOrder();
  };

  const truncateText = (text, maxLength) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  const renderModalIcon = () => {
    if (modalType === "success") {
      return <Icon name="check-circle" size={80} color="green" />;
    } else if (modalType === "error") {
      return <Icon name="times-circle" size={80} color="red" />;
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Check Out</Text>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Recipient Details</Text>
          <TextInput
            style={styles.input}
            value={recipientName}
            onChangeText={setRecipientName}
            placeholder="Recipient's Name"
          />
          <TextInput
            style={styles.input}
            value={user.email}
            editable={false}
            placeholder="Email"
          />
          <TextInput
            style={styles.input}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="Phone Number"
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={setAddress}
            placeholder="Address"
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Payment method</Text>
          {paymentMethods.map((method) => (
            <View key={method.id} style={styles.paymentMethod}>
              <BouncyCheckbox
                size={25}
                fillColor="green"
                isChecked={selectedPaymentMethod === method.id}
                text={method.name}
                onPress={() => setSelectedPaymentMethod(method.id)}
                textStyle={[
                  styles.paymentMethodText,
                  { textDecorationLine: "none" },
                ]}
              />
            </View>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Cart Items</Text>
          <FlatList
            data={cart}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <View style={styles.cartItem}>
                <Text style={styles.cartItemText}>
                  {truncateText(item.name, 20)}
                </Text>
                <Text style={styles.cartItemText}>
                  {item.quantity} x ${item.price.toFixed(2)}
                </Text>
              </View>
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>
      <View style={styles.totalContainer}>
        <View>
          <Text style={styles.totalLabelText}>Total Amount</Text>
          <Text style={styles.totalText}>
            ${calculateTotalPrice().toFixed(2)}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={handleContinue}
        >
          <Text style={styles.checkoutButtonText}>Place Order</Text>
        </TouchableOpacity>
      </View>
      <Modal isVisible={modalVisible} style={styles.modal}>
        <View style={styles.modalContent}>
          {renderModalIcon()}
          <Text style={styles.modalText}>{modalMessage}</Text>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "#EEEDEB",
  },
  scrollViewContent: {
    padding: 10,
  },
  header: {
    fontSize: SIZES.large,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "center",
  },
  section: {
    marginBottom: 20,
    backgroundColor: "#ffffff",
    padding: 8,
    borderRadius: 8,
    elevation: 4,
  },
  sectionHeader: {
    marginBottom: SIZES.small,
    fontSize: SIZES.medium,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  paymentMethod: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  paymentMethodText: {
    marginLeft: 10,
    fontSize: SIZES.medium,
    fontWeight: "500",
  },
  cartContainer: {
    flex: 1,
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  cartItemText: {
    fontSize: SIZES.medium,
    maxWidth: "45%",
  },
  totalContainer: {
    height: 90,
    width: "100%",
    alignSelf: "center",
    position: "fixed",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#ffffff",
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
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default Payment;

