import React, { useEffect, useState, useRef, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";
import { useTheme } from "react-native-paper";
import styles from "./EditProfile.style";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  MaterialCommunityIcons,
  Feather,
  FontAwesome,
} from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { userContext } from "../contexts/userContext";
import axios from "axios";
import Toast from "react-native-toast-message"; // Import the Toast module
import { backend_url } from "../backend_url";

const EditProfileScreen = () => {
  const { colors } = useTheme();
  const bs = useRef(null);
  const takePhotoFromCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      Toast.show({
        type: 'error',
        text1: 'Permission to access camera is required!',
        visibilityTime: 1500,
        autoHide: true,
      });
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const choosePhotoFromLibrary = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Toast.show({
        type: 'error',
        text1: 'Permission to access camera roll is required!',
        visibilityTime: 1500,
        autoHide: true,
      });
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      console.log(result.assets[0].uri);
      setImage(result.assets[0].uri);
    }
  };

  const { user, profile, setProfile, token } = useContext(userContext);
  const [image, setImage] = useState(profile.avatar);
  const [name, setName] = useState(user.name);
  const [mobile, setMobile] = useState(profile.mobile);
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(profile.address);

  const fetchProfile = async (userId) => {
    try {
      const response = await axios.get(`${backend_url}/profile/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setProfile(response.data);
        setMobile(response.data.mobile);
        setAddress(response.data.address);
        setImage(response.data.avatar);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleUpdate = async () => {
    try {
      let response = null;
      const res = await axios.get(`${backend_url}/profile/${user._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.status)
      if (res.status === 200 && (res.data === undefined || res.data === "" || res.data === null)) {
        await axios.post(
          `${backend_url}/profile/${user._id}`,
          {
            avatar: image,
            mobile,
            address,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        return;
      } else {
        response = await axios.put(
          `${backend_url}/profile/${user?._id}`,
          {
            avatar: image,
            mobile,
            address,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data)
      }
      const response2 = await axios.put(
        `${backend_url}/user/${user?._id}`,
        {
          email,
          name,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response, response2);
      if (response.status === 200 && response2.status === 200) {
        Toast.show({
          type: 'success',
          text1: 'Profile updated successfully!',
          visibilityTime: 1500,
          autoHide: true,
        });
        setProfile({ ...response.data });
        setName(response2.data.name);
        setMobile(response.data.mobile);
        setEmail(response2.data.email);
        setAddress(response.data.address);
        setImage(response.data.avatar);
      }
    } catch (error) {
      console.error(error.message);
      Toast.show({
        type: 'error',
        text1: 'Error updating profile!',
        text2: error.message,
        visibilityTime: 1500,
        autoHide: true,
      });
    }
  };

  useEffect(() => {
    fetchProfile(user?._id);
  }, [user?._id]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.heading}>Edit Profile</Text>
        <View
          style={{
            height: 100,
            width: 100,
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ImageBackground
            source={
              image !== ""
                ? { uri: image }
                : require("../assets/images/profile.jpeg")
            }
            style={{ height: 100, width: 100 }}
            imageStyle={{ borderRadius: 15 }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="camera"
                size={35}
                color="#fff"
                style={{
                  opacity: 0.7,
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 1,
                  borderColor: "#fff",
                  borderRadius: 10,
                }}
                onPress={choosePhotoFromLibrary}
              />
            </View>
          </ImageBackground>
        </View>
        <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}>
          {user.name}
        </Text>
      </View>

      <View style={styles.action}>
        <FontAwesome name="user-o" color={colors.text} size={20} />
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          placeholderTextColor="#666666"
          autoCorrect={false}
          style={[styles.textInput, { color: colors.text }]}
        />
      </View>
      <View style={styles.action}>
        <Feather name="phone" color={colors.text} size={20} />
        <TextInput
          placeholder="Phone"
          value={mobile}
          onChangeText={(text) => setMobile(text)}
          placeholderTextColor="#666666"
          keyboardType="number-pad"
          autoCorrect={false}
          style={[styles.textInput, { color: colors.text }]}
        />
      </View>
      <View style={styles.action}>
        <FontAwesome name="envelope-o" color={colors.text} size={20} />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholderTextColor="#666666"
          keyboardType="email-address"
          autoCorrect={false}
          style={[styles.textInput, { color: colors.text }]}
        />
      </View>
      <View style={styles.action}>
        <MaterialCommunityIcons
          name="map-marker-outline"
          color={colors.text}
          size={20}
        />
        <TextInput
          placeholder="Address"
          value={address}
          onChangeText={(text) => setAddress(text)}
          placeholderTextColor="#666666"
          autoCorrect={false}
          style={[styles.textInput, { color: colors.text }]}
        />
      </View>
      <TouchableOpacity style={styles.commandButton} onPress={handleUpdate}>
        <Text style={styles.panelButtonTitle}>Edit</Text>
      </TouchableOpacity>
      <Toast />
    </SafeAreaView>
  );
};

export default EditProfileScreen;
