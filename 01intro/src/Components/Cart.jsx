import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";

export default function Cart({ product, toDelete }){

    const{id, title, price, image} = product;

        return(<>
    
        <div className="rounded-lg w-[25rem] h-[30rem] b-10 bg-yellow-200 flex flex-col items-center">
            <img className="h-[18rem] p-10" src={image} alt="image here" />
            <p className="text-3xl">{title.slice(0, 20)}...</p>
            <p className="text-2xl">PRICE: {price}</p>
            <motion.button onClick={()=>toDelete(id)} whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.2 }} className="bg-red-400 text-olive-100 rounded-lg my-10 text-2xl w-[15rem] h-[3rem] cursor-pointer">Delete <FontAwesomeIcon icon={faTrash} /></motion.button>
        </div>
    
    </>)
}