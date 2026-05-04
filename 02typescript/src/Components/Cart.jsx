import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import React from "react";
import { useNavigate } from "react-router";
import { CartContext } from "../Context/CartContext";

export default function Cart(){

    const navigate = useNavigate();
    const {itemCount, toDelete, cartProductCount, setCartProductCount} = React.useContext(CartContext);

    const addRemoveBtn = "text-olive-100 rounded-lg my-10 ml-2 text-2xl w-[2rem] h-[3rem] cursor-pointer";

    function getProductCount(item){
        const theItem = cartProductCount.find((e)=> item.id === e.productId);
        return theItem.productCount;
    }

    const removeItem = (item)=>{
        setCartProductCount((prev)=>
                prev.map((e)=>{
                    return  e.productId === item.id ? { ...e, productCount: e.productCount - 1} : e
                })
            )
    }

    const adddItem = (item)=>{
        setCartProductCount((prev)=>
                prev.map((e)=>{
                    return  e.productId === item.id ? { ...e, productCount: e.productCount + 1} : e
                })
            )
    }

    return(<>

            
            <motion.button onClick={()=>{navigate("/ecommerce")}} whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}
                    className="bg-gray-800 border rounded-lg m-10 text-white text-2xl w-[10rem] h-[3rem] cursor-pointer">Back to list</motion.button>
            <h1 className="text-6xl font-bold text-center">CART -</h1>
               
            
            <div className="flex gap-5 flex-wrap mx-4">
                {itemCount.length === 0 ? (<p>NO items in cart</p>) :
                (itemCount.map((e)=>(
                        <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} >
                            <div className="rounded-lg w-[25rem] h-[30rem] b-10 bg-yellow-200 flex flex-col items-center">
                                <img className="h-[18rem] p-10" src={e[0].image} alt="image here" />
                                <p className="text-3xl">{e[0].title.slice(0, 20)}...</p>
                                <p className="text-2xl">PRICE: {e[0].price}</p>
                                <div className="flex justify-center">
                                    <motion.button onClick={()=>toDelete(e[0].id)} whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.2 }} 
                                    className="bg-red-400 text-olive-100 rounded-lg my-10 text-2xl w-[8rem] h-[3rem] cursor-pointer">Delete <FontAwesomeIcon icon={faTrash} /></motion.button>                         
                                    <div className="flex justify-center ml-5" >
                                        {getProductCount(e[0])>1 && 
                                        (<button onClick={()=>removeItem(e[0])} className={`bg-orange-400 +${addRemoveBtn}` }>-</button>)}
                                            <p className="text-3xl my-11 ml-2">{getProductCount(e[0])}</p>
                                        <button onClick={()=>adddItem(e[0])} className={`bg-green-400 +${addRemoveBtn}`}>+</button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        ))
                )}
            </div>
    
    </>);
}