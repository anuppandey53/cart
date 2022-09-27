import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import {
  addToCart,
  getProducts,
  getTotalCost,
} from "../services/ProductsService";

const CheckoutScreen = ({ cart, setCart, ...props }) => {
  if (!cart || Object.values(cart).length === 0) {
    return props.navigation.navigate("Product");
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {Object.values(cart).map((product) => (
        <View style={styles.product} key={product.id}>
          <View
            style={{
              flex: 2 / 3,
              backgroundColor: "#fff",
              // justifyContent: "space-between",
              width: "100%",
              borderRadius: 25,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={styles.productImageContainer}>
              <Image style={styles.productImage} source={product.image} />
            </View>
            <View style={styles.productDescriptionContainer}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>{product.price}</Text>
              <Text style={styles.productDescription}>
                {product.description}
              </Text>
            </View>
          </View>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Text style={{ fontSize: 20 }}>
              x {product.quantity} = $ {product.quantity * product.price}
            </Text>
          </View>
        </View>
      ))}
      <View
        style={{
          alignSelf: "baseline",
          marginTop: 100,
          padding: 20,
          backgroundColor: "#303030",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ ...styles.text, fontSize: 18 }}>Total Cost =</Text>
        <Text style={{ ...styles.text, fontSize: 18 }}>
          Rs. {getTotalCost(cart)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#252525",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
  product: {
    backgroundColor: "#fff",
    justifyContent: "space-between",
    width: "100%",
    margin: 10,
    padding: 10,
    borderRadius: 25,
    elevation: 5,
    height: 100,
    flexDirection: "row",
    alignItems: "center",
  },
  productImageContainer: {
    width: 80,
    height: 80,
    flexDirection: "row",
  },
  productDescriptionContainer: {
    flexDirection: "column",
  },
  productImage: {
    height: 80,
    width: 80,
    borderRadius: 15,
    flex: 1,
  },
  productName: {
    // color: "#fff",
  },
  productPrice: {
    // color: "#fff",
  },
  productDescription: {
    // color: "#fff",
  },
});

export default CheckoutScreen;
