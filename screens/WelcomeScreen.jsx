import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{
            uri: "https://static.vecteezy.com/system/resources/previews/002/806/334/non_2x/modern-armchair-with-mini-table-interior-of-the-living-room-with-furniture-flat-cartoon-style-illustration-vector.jpg",
          }}
          style={styles.headerImage}
        />
        <Text style={styles.title}>Discover Your Dream Furniture</Text>
        <Text style={styles.subtitle}>
          Explore a variety of furniture based on your taste and preference
        </Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={[styles.button, styles.secondaryBtn]}
        >
          <Text style={[styles.buttonText]}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 80,
  },
  button: {
    backgroundColor: "#164B60",
    padding: 15,
    borderRadius: 5,
    width: "45%",
    alignItems: "center",
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  headerImage: {
    width: 300,
    height: 300,
  },
  secondaryBtn: {
    backgroundColor: "#29ADB2",
  },
});

export default WelcomeScreen;
