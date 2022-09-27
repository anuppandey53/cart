const PRODUCTS = [
  {
    id: 1,
    name: "DAW Chair",
    price: 49.9,
    image: require("../assets/product_images/daw_chair.jpg"),
    description: "Very comfortable chair",
  },
  {
    id: 2,
    name: "Ergonomic Chair",
    price: 33.33,
    image: require("../assets/product_images/ergo_chair.jpg"),
    description: "office suited chair",
  },
  {
    id: 3,
    name: "Wooden Chair",
    price: 13,
    image: require("../assets/product_images/simp_chair.jpg"),
    description: "Simple chair",
  },
];

export function getProducts() {
  return PRODUCTS;
}

export function getProduct(id) {
  return PRODUCTS.find((product) => product.id == id);
}

export const addToCart = (product, quantity, cart, setCart) => {
  const id = product.id;
  if (cart[id]) {
    cart[id].quantity = cart[id].quantity + quantity;
    if (cart[id].quantity === 0) {
      delete cart[id];
    }
  } else {
    cart[id] = {
      ...product,
      quantity: quantity,
    };
  }
  setCart({ ...cart });
};

export const getTotalCost = (cart) => {
  let totalCost = 0;

  Object.values(cart).forEach((p) => {
    totalCost += p.quantity * p.price;
  });

  return totalCost;
};
