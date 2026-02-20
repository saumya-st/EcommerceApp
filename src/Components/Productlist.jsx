import Productcard from "./Productcard";
export default function ProductList({products,addtocart}){
    return(
        <div>
{products.map(product=> <Productcard
 key={product.id}
product={product}
addtocart={addtocart}/>
)}

        </div>
    );
}