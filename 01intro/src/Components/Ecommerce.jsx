import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { motion } from "motion/react";
import React from "react";
import Cart from "./Cart";
import Products from "./Products";

export default function Ecommerce(){

    const[itemCount, setItemCount] = React.useState([]);
    const[productsList, setProductsList] = React.useState([]);
    const[searchItem, setSearchItem] = React.useState('')

    function addToCart(theId){
        const result = productsList.filter((e)=> e.id === theId)
        setItemCount([...itemCount, result]);
    }

    function toDelete(removeId){
        
        const result = itemCount.filter((e)=>{
            e[0].id !== removeId
            console.log("The removeId - " + removeId + "and eid - " + e[0].id);
            return e[0].id !== removeId;
        });
        setItemCount(result);
        
    }
    console.log("the delete is - " + itemCount);

    React.useEffect(()=>{
        async function getItems(){
        const result = await axios.get("https://fakestoreapi.com/products");
        console.log(result);
        setProductsList(result.data);
    }

    getItems();
    },[]);

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
            
            <div className="flex">
                <FontAwesomeIcon className="text-4xl" icon={faCartShopping} />
                <div className="text-2xl">{itemCount.length}</div>
            </div>
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

        <h1 className="text-6xl font-bold my-20 text-center">CART -</h1>
        
        <div className="flex gap-5 flex-wrap mx-4">
            {itemCount.length === 0 ? (<p>NO items in cart</p>) :
            (itemCount.map((e,i)=>(
                    <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} > 
                        <Cart key={i} product={e[0]} toDelete={toDelete} />
                    </motion.div>
            ))
            )}
        </div>

  </>)

}