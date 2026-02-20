import { useState } from "react";
import Header from "./Components/Header";
import ProductList from "./Components/Productlist";

export default function App() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 1000,
      image:
        "https://th.bing.com/th/id/OIP.-shT8_xr390DwSqP4ab99AHaEK?w=266&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
    {
      id: 2,
      name: "Charger",
      price: 500,
      image:
        "https://th.bing.com/th/id/OIP.-bz1YBghhdx39bejgZQh0wHaHB?w=198&h=188&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
  ];

  function addToCart(product) {
    setCart([...cart, product]);
  }

  // function removeFromCart(index) {
  //   const updatedCart = cart.filter((_, i) => i !== index);
  //   setCart(updatedCart);
  // }

  const totalAmount = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div>
      <Header cartCount={cart.length} totalAmount={totalAmount} />

      <ProductList
        products={products}
        addToCart={addToCart}
      />
      
    </div>
  );
}
