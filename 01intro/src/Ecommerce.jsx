import axios from "axios";
import { motion } from "motion/react";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import ProductCard from "./ProductCard";

function Ecommerce() {
    const [product,setProduct]=React.useState([]);
    const [addedProduct,setAddedProduct]=React.useState([])
    async function handleClick(){
       const res=  await axios.get("https://fakestoreapi.com/products");
       setProduct([...res.data])
    };
    function handleAdd(num){
       let result= product.filter((e,i)=>i==num);
       setAddedProduct([...addedProduct,result]);
    }
    React.useEffect(()=>{
        handleClick();
    },[]);

  return (
    <div>
        <div className="flex  justify-between p-10 pt-10">
            <motion.div  initial={{opacity:0,x:100}} animate={{ opacity: 1,x:0}} className="">Ecommerce</motion.div>
            <div className="relative"><FaShoppingCart size={30} />
            <div className="absolute top-4 left-8">{addedProduct.length}</div>
            </div>
            
            </div>



        <div className="flex  flex-wrap gap-10 justify-center">
            {product.length>0?<>
            
            {product.map((e,i)=><ProductCard handleAdd={handleAdd} key={i} index={i} product={e}/>)}
            
            
            
            </>:<motion.div initial={{y:-100}} animate={{y:0}} className="text-center">No Products</motion.div>}

        </div>


    </div>
  )
}

export default Ecommerce