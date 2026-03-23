import Productcard from "./Productcard";
import React from "react";
export default function ProductList({products,addToCart}){
    return(
        <div>
{products.map(product=> <Productcard
 key={product.id}
product={product}
addtocart={addToCart}/>
)}

        </div>
    );
}