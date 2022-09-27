import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import ProductScreen from "./screen/ProductScreen";
import CartScreen from "./screen/CartScreen";
import CheckoutScreen from "./screen/CheckoutScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [cart, setCart] = useState({});
  return (
    <View style={styles.container}>
      <NavigationContainer initialRouteName="Product">
        <Stack.Navigator>
          <Stack.Screen name="Product">
            {(props) => (
              <ProductScreen cart={cart} setCart={setCart} {...props} />
            )}
          </Stack.Screen>
          <Stack.Screen name="Cart">
            {(props) => <CartScreen cart={cart} setCart={setCart} {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Checkout">
            {(props) => (
              <CheckoutScreen cart={cart} setCart={setCart} {...props} />
            )}
          </Stack.Screen>

          {/* <Stack.Screen name="Cart">
            {(props) => <HomeScreen cart={cart} setCart={setCart} {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Checkout">
            {(props) => <HomeScreen cart={cart} setCart={setCart} {...props} />}
          </Stack.Screen> */}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
