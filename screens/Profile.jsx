import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  StyleSheet
} from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { COLORS } from "../constants";
import style from "./profile.style";
import { userContext } from "../contexts/userContext";
import axios from "axios";
import Toast from "react-native-toast-message";
import { backend_url } from "../backend_url";

export default function Profile({ navigation }) {
  const { user, setUser, userLogin, setUserLogin, profile, token } = useContext(userContext);
  const [profileImage, setProfileImage] = useState(null);
  console.log(profileImage);
  const fetchProfileImage = async (userId) => {
    try {
      const response = await axios.get(`${backend_url}/profile/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setProfileImage(response.data.avatar);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  
  useEffect(() => {
    fetchProfileImage(user._id);
  }, [user._id,profile]);
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

  const handleEdit = () => {
    navigation.navigate("Edit Profile");
  };
  const handleFavorite = () => {
    navigation.navigate("Favorite");
  };
  const handleCart = () => {
    navigation.navigate("Cart");
  };
  const handleOrder = () => {
    navigation.navigate("Orders");
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
            source={
              profileImage !== null || profileImage !== undefined
                ? {
                    uri: profileImage,
                  }
                : require("../assets/images/profile.jpeg")
            }
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
                  <Text style={style.menuText}>Favorites</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleOrder}>
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

              <TouchableOpacity onPress={handleEdit}>
                <View style={style.menuItem(0.2)}>
                  <FontAwesome5
                    name="user-edit"
                    size={24}
                    color={COLORS.primary}
                  />
                  <Text style={style.menuText}>Edit Account</Text>
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
