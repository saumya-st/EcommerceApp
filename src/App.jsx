import { useState } from "react";

export default function App(){
  const [cart,setCart] = useState([]);
  const product = [
    {
    id:1,
    name:"laptop",
    price:1000,
    image:"https://th.bing.com/th/id/OIP.-shT8_xr390DwSqP4ab99AHaEK?w=266&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
    {
      id:2,
      name:"charger",
      price:500,
      image:"https://th.bing.com/th/id/OIP.-bz1YBghhdx39bejgZQh0wHaHB?w=198&h=188&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
    
    
  ]
  function addtocart(){
    setCart([...cart,product]);
  }

  function removefromcart(index){
    const updatecart = cart.filter((_,i)=>i!=index);
    setCart(updatecart);
  }

  const totalAmount = cart.reduce((total,index)=>(total+product.price,0));
  
  return(
    <div>
<Header cart ={cart.length} />
<Productlist />
<Cart />


    </div>
  )
}