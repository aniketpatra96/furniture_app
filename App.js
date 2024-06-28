
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import PoppinsRegular from "./assets/fonts/Poppins-Regular.ttf";
import PoppinsMedium from "./assets/fonts/Poppins-Medium.ttf";
import PoppinsBold from "./assets/fonts/Poppins-Bold.ttf";
import PoppinsSemiBold from "./assets/fonts/Poppins-SemiBold.ttf";
import PoppinsExtraBold from "./assets/fonts/Poppins-ExtraBold.ttf";
import PoppinsLight from "./assets/fonts/Poppins-Light.ttf";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import { Cart, ProductDetails} from "./screens";
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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Bottom Navigation"
          component={BottomTabNavigation}
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
        {/** uncomment after adding product list */}
        {/* <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={{
            headerShown: false,
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


