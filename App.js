import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";
import PoppinsRegular from "./assets/fonts/Poppins-Regular.ttf";
import PoppinsMedium from "./assets/fonts/Poppins-Medium.ttf";
import PoppinsBold from "./assets/fonts/Poppins-Bold.ttf";
import PoppinsSemiBold from "./assets/fonts/Poppins-SemiBold.ttf";
import PoppinsExtraBold from "./assets/fonts/Poppins-ExtraBold.ttf";
import PoppinsLight from "./assets/fonts/Poppins-Light.ttf";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import {
  Profile,
  Cart,
  ProductDetails,
  WelcomeScreen,
  LoginScreen,
  RegisterScreen,
  Favorite,
  EditProfile,
  Payment,
  Orders,
} from "./screens";
import { ShoppingProvider } from "./contexts";
import { PaperProvider } from "react-native-paper";
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    regular: PoppinsRegular,
    medium: PoppinsMedium,
    bold: PoppinsBold,
    semibold: PoppinsSemiBold,
    extrabold: PoppinsExtraBold,
    light: PoppinsLight,
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);
  if (!fontsLoaded) {
    return null;
  }
  return (
    <PaperProvider>
      <ShoppingProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Bottom Navigation"
              component={BottomTabNavigation}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Cart"
              component={Cart}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ProductDetails"
              component={ProductDetails}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Home"
              component={WelcomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Favorite"
              component={Favorite}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Edit Profile"
              component={EditProfile}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Payment"
              component={Payment}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Orders"
              component={Orders}
              options={{
                headerShown: true,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ShoppingProvider>
    </PaperProvider>
  );
}
