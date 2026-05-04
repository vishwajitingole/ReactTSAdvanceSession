import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { motion } from "motion/react";
import React from "react";
import { useNavigate } from "react-router";
import { CartContext } from "../Context/CartContext";
import Products from "./Products";

export default function Ecommerce(){

    const navigate = useNavigate();
    const {productsList, setProductsList, addToCart, cartProductCount} = React.useContext(CartContext);
  
    const[searchItem, setSearchItem] = React.useState('')

    const theCartCount = cartProductCount.reduce(
                (sum, e) => sum + e.productCount, 0
            );

    React.useEffect(()=>{
        async function getItems(){
        const result = await axios.get("https://fakestoreapi.com/products");
        console.log(result);
        setProductsList(result.data);
    }

    getItems();
    },[setProductsList]);

    const searchProduct = productsList.filter((product)=>{
        
        return product.title.toLowerCase().includes(searchItem.toLowerCase());
    })

    return(<>   
        <div className="flex w-[100%] px-10 my-10 justify-between">
            <div className="text-2xl">
                <h1>E Commerce by Sudhanshu</h1>
            </div>

            <div className="flex justify-center mb-8">
                <input type="text" placeholder="Search..." className="border-2 border-gray-300 p-2 rounded-lg w-[20rem] h-[3rem]" value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)} />
            </div>
            
            <motion.div onClick={()=>{navigate("/cart")}} className="flex cursor-pointer" whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
                <FontAwesomeIcon className="text-4xl" icon={faCartShopping} />
                <div className="text-2xl">{theCartCount}</div>
            </motion.div>
        </div>

        <div className="flex gap-5 flex-wrap mx-4">
            {searchProduct.length === 0 ? (<p>NO items found</p>) :
            (searchProduct.map((e,i)=>(
                    <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} > 
                        <Products key={i} product={e} addToCart={addToCart} />
                    </motion.div>
            ))
            )}
        </div>

  </>)

}