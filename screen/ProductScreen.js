import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaView,  Text,  Image,  ScrollView,  StyleSheet,  View,  TouchableOpacity} from "react-native";
import { addToCart, getProducts } from "../services/ProductsService";

const ProductScreen = ({ cart, setCart, ...props }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {

          setProducts(getProducts());
    }, [] );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {products.map((product) => (
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
          <View>
            <TouchableOpacity
              onPress={() => addToCart(product, 1, cart, setCart)}
              style={{
                backgroundColor: "#252525",
                borderRadius: 10,
                padding: 10,
              }}
            >
              <Text style={{ color: "#fff" }}>Add to cart</Text>
            </TouchableOpacity>
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
        <Text style={styles.text}>
          {Object.keys(cart).length} items in CART
        </Text>
        <TouchableOpacity
          onPress={() => setCart({})}
          style={{
            backgroundColor: "#252525",
            borderRadius: 10,
            padding: 10,
          }}
        >
          <Text style={styles.text}>Empty Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Cart")}
          style={{
            backgroundColor: "#252525",
            borderRadius: 10,
            padding: 10,
          }}
        >
          <Text style={styles.text}>Goto Cart</Text>
        </TouchableOpacity>
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
    // width: 80,
    // height: 80,
  },
  productDescriptionContainer: {
    // flexDirection: "column",
  },
  productImage: {
    height: 80,
    width: 80,
    borderRadius: 15,
    // flex: 1,
  },
});

export default ProductScreen;
