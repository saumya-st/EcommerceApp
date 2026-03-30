// import { useState } from "react";
// import Header from "./Components/Header";
// import ProductList from "./Components/Productlist";
// import Cart from "./Components/Cart";
// import Search from "./Components/search";
// import React from "react";
// import './App.css'

// export default function App() {
//   const [cart, setCart] = useState([]);
//   const[totalAmt , setAmt] = useState(0);

//   const products = [
//     {
//       id: 1,
//       name: "Laptop",
//       price: 1000,
//       image:
//         "https://th.bing.com/th/id/OIP.-shT8_xr390DwSqP4ab99AHaEK?w=266&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
//     },
//     {
//       id: 2,
//       name: "Charger",
//       price: 500,
//       image:
//         "https://th.bing.com/th/id/OIP.-bz1YBghhdx39bejgZQh0wHaHB?w=198&h=188&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
//     },
//   ];

//   function addToCart(product) {
//     setCart([...cart, product]);
//     setAmt(totalAmt+product.price);
//   }

//   function removeFromCart(index) {
//     const updatedCart = cart.filter((_, i) => i !== index);
//     setCart(updatedCart);
//   }

//   /*const totalAmount = cart.reduce(
//     (total, item) => total + item.price,
//     0
//   );*/

//   return (
//     <div>
//       <Search/>
//       <Header cartCount={cart.length}  />

//       <ProductList
//         products={products}
//         addToCart={addToCart}
//       />
//       <Cart totalAmt={totalAmt} />
      
//     </div>
//   );
// }
// //  import { useEffect } from "react";
// //  import './App.css'
// //  function App(){
// //   useEffect(()=>{console.log("Welcome")},[])
// //   useEffect(()=>{console.log("Welcome")},[])

// //   return(
// //     <>
// //     <h1>MY APP</h1>
// //     </>
// //   )
// //  }
// //  export default App



// import { useState } from 'react'
// import{BrowserRouter , Routes , Route} from "react-router-dom"
// import './App.css'

// import Footer from './components/Footer'
// import News from './components/News'
// import Navbar from './Components/Navbar'
// import Home from './components/Home'
// import About from './components/About'

// const App() {
//    return (
//     <>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />

//         </Routes>
//       </BrowserRouter>

//       <News />
//       <Footer />
//     </>
//   )
// }

// export default App



import { useState } from "react";
import Header from "./Components/Header";
import ProductList from "./Components/Productlist";
import Cart from "./Components/Cart";
import Search from "./Components/search";
import React from "react";
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      
    </BrowserRouter>
  );
};

export default App;