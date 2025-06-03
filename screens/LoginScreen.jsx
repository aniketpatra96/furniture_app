import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Keyboard,
} from "react-native";
import axios from "axios";
import { userContext } from "../contexts/userContext";
import Toast from 'react-native-toast-message'; // Import the Toast module
import { backend_url } from "../backend_url"; // Import the backend URL
import { decodeToken } from "react-jwt";

const LoginScreen = ({ navigation }) => {  
  const { setUser, setUserLogin, setToken } = useContext(userContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      if (validateEmail(email) && validatePassword(password)) {
        const user = { email, password };
        const response = await axios.post(`${backend_url}/login`, user);
        if (response.status === 200) {
          const decodedToken = decodeToken(response.data.token);
          const { _id, name, email } = decodedToken.user;
          setToken(response.data.token);
          setUser({ _id, name, email });
          setUserLogin(true);
          Toast.show({
            type: 'success',
            text1: 'Login Successful',
            visibilityTime: 1500,
            autoHide: true,
          });
          setTimeout(() => navigation.navigate("Bottom Navigation"), 300);
          setEmail("");
          setPassword("");
        } else {
          Toast.show({
            type: 'error',
            text1: 'Login Failed',
            text2: 'Invalid credentials',
            visibilityTime: 3000,
            autoHide: true,
          });
          return;
        }
      } else {
        Toast.show({
          type: 'error',
          text1: 'Invalid Email or Password',
          visibilityTime: 3000,
          autoHide: true,
        });
        return;
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Login Failed',
        text2: error.message,
        visibilityTime: 3000,
        autoHide: true,
      });
    }
  };
  const validateEmail = (email) => {
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
  };
  const validatePassword = (password) => {
    const minLength = 8;
    const maxLength = 20;
    const regex =
      /^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    if (password.length < minLength || password.length > maxLength) {
      return false;
    }
    return regex.test(password);
  };
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://img.freepik.com/free-vector/cozy-reading-room-modern-design-interior-wooden-nightstand-cabinet-orange-armchair-desk-lump-large-potted-plant_575670-1420.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707350400&semt=ais",
        }}
        style={styles.headerImage}
      />
      <Text style={styles.header}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email ID"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={(text) => setEmail(text.toLowerCase())}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.forgotButton}>
        <Text style={styles.forgotText}>Forgot?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or, login with ...</Text>
      <View style={styles.socialIcons}>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={{
              uri: "https://icon2.cleanpng.com/lnd/20241121/sc/bd7ce03eb1225083f951fc01171835.webp",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={{
              uri: "https://image.pngaaa.com/840/5259840-middle.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={{
              uri: "https://e7.pngegg.com/pngimages/708/311/png-clipart-twitter-twitter-thumbnail.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.registerText}>
        New to the app?{" "}
        <Text
          onPress={() => navigation.navigate("Register")}
          style={styles.registerLink}
        >
          Register
        </Text>
      </Text>
      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  headerImage: {
    marginBottom: 8,
    width: 300,
    height: 300,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    width: "100%",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginVertical: 3,
  },
  forgotButton: {
    alignSelf: "flex-end",
  },
  forgotText: {
    color: "#0D9276",
    marginVertical: 10,
  },
  loginButton: {
    backgroundColor: "#164B60",
    padding: 15,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    marginVertical: 20,
    elevation: 5,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    color: "#555",
    marginVertical: 10,
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  registerText: {
    color: "#555",
    marginVertical: 10,
  },
  registerLink: {
    color: "#0D9276",
    fontWeight: "bold",
  },
  email: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 14,
    // elevation: 10,
    marginVertical: 20,
    alignItems: "center",
    height: 50,
  },
});

export default LoginScreen;
