import { motion } from "motion/react";
import { NavLink } from "react-router";
export default function ProductCard({product,handleAdd,index}){
   let {image,title,price,id}=product;
    return (<div className="bg-stone-200 rounded-lg w-[20rem] h-[25rem] text-center overflow-hidden">
       <NavLink to={`/product/${id}`} className="flex justify-center items-center ">
         <img className=" w-auto  h-[15rem]  " src={image} alt="" />
       </NavLink>
       
        <div className="font-bold mt-10 ">{title.length > 10 ? title.substring(0, 20) + "..." : title}</div>
        <div className="font-semibold mt-5">$ {price}</div>
        <motion.button onClick={()=>handleAdd(index)}  whileTap={{ scale: 0.9 }} animate={{ scale: 1 }}  className="px-3 py-1 bg-orange-400 rounded-lg ">  Add to Cart </motion.button>
    </div>)
}