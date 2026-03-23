import React from "react";
export default function Productcard({product,addtocart}){
    return(
        <div>
<img src={product.image} alt ={product.name}/>
<h4>{product.name}</h4>
<p>{product.price}</p>
<button onClick={()=>addtocart(product)}>Add to cart</button>

        </div>
    )
}