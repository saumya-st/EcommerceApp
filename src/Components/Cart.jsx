import React from "react";
export default function Cart({totalAmt}){
    return(
        <div>
            <h2>YOUR CART: </h2>
            <h3>total cart amount: {totalAmt}</h3>
            <button onClick={()=>removeFromCart(index)}>
                    Remove</button>
        </div>

    )
}