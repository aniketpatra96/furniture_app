import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { COLORS } from "../constants";
import style from "./profile.style";
import { userContext } from "../contexts/userContext";

export default function Profile({ navigation }) {
  const { user, setUser, userLogin, setUserLogin } = useContext(userContext);
  const logout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Continue",
          onPress: () => {
            setUser({});
            setUserLogin(false);
            navigation.navigate("Login");
          },
        },
      ],
      { cancelable: false }
    );
  };
  const clearCache = () => {
    Alert.alert(
      "Clear Cache",
      "Are you sure you want to delete all saved data on this device",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Continue",
          onPress: () => {
            console.log("Logout Pressed");
          },
        },
      ],
      { cancelable: false }
    );
  };

  const deleteAccount = () => {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete your account?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Continue",
          onPress: () => {
            console.log("Logout Pressed");
          },
        },
      ],
      { cancelable: false }
    );
  };
  const handleFavorite = () => {
    navigation.navigate("Favorite");
  };
  const handleCart = () => {
    navigation.navigate("Cart");
  };
  return (
    <ScrollView
      style={{ marginBottom: 50 }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={style.container}>
        <StatusBar backgroundColor={COLORS.gray} />
        <View style={{ width: "100%" }}>
          <Image
            source={require("../assets/images/space.jpg")}
            style={style.cover}
          />
        </View>
        <View style={style.profileContainer}>
          <Image
            source={require("../assets/images/profile.jpeg")}
            style={style.profile}
          />
          <Text style={style.name}>
            {userLogin ? user?.name : "Please login into your account"}
          </Text>
          {userLogin ? (
            <View style={style.loginBtn}>
              <Text style={style.menuText}>{user.email}</Text>
            </View>
          ) : (
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <View style={style.loginBtn}>
                <Text style={style.menuText}>L O G I N</Text>
              </View>
            </TouchableOpacity>
          )}

          {userLogin && (
            <ScrollView style={style.menuWrapper}>
              <TouchableOpacity onPress={handleFavorite}>
                <View style={style.menuItem(0.2)}>
                  <MaterialCommunityIcons
                    name="heart-outline"
                    color={COLORS.primary}
                    size={24}
                  />
                  <Text style={style.menuText}>Favourites</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {}}>
                <View style={style.menuItem(0.2)}>
                  <MaterialCommunityIcons
                    name="truck-delivery-outline"
                    color={COLORS.primary}
                    size={24}
                  />
                  <Text style={style.menuText}>Orders</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleCart}>
                <View style={style.menuItem(0.2)}>
                  <SimpleLineIcons
                    name="bag"
                    color={COLORS.primary}
                    size={24}
                  />
                  <Text style={style.menuText}>Cart</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => clearCache()}>
                <View style={style.menuItem(0.2)}>
                  <MaterialCommunityIcons
                    name="cached"
                    color={COLORS.primary}
                    size={24}
                  />
                  <Text style={style.menuText}>Clear cache</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => deleteAccount()}>
                <View style={style.menuItem(0.2)}>
                  <AntDesign
                    name="deleteuser"
                    color={COLORS.primary}
                    size={24}
                  />
                  <Text style={style.menuText}>Delete Account</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => logout()}>
                <View style={style.menuItem(0.2)}>
                  <AntDesign name="logout" color={COLORS.primary} size={24} />
                  <Text style={style.menuText}>Logout</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          )}
        </View>
      </View>
    </ScrollView>
  );
}
