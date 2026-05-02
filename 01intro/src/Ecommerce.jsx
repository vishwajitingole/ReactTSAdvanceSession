import axios from "axios";
import { motion } from "framer-motion";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import ProductCard from "./ProductCard";

function Ecommerce(){
    const [product, setProduct] = React.useState([]);
    const [addedProduct,setAddedProduct]=React.useState([]);
    const [search, setSearch]=React.useState("");
    
    //best practice to keep the fetch function inside the useEffect hook
    // or else you will have to memozie the function in order to prevent the unecessary rerenders

    React.useEffect( () =>{

        async function fetchData(){
            const res = await axios("https://fakestoreapi.com/products");
            setProduct(res.data);
        }

        fetchData();
    } ,[])

    function handleAdd(num){
         const selectedProduct = product[num];
         setAddedProduct(prev => [...prev, selectedProduct]);
        //let result= product.filter((e,i)=>i==num);
        //setAddedProduct([...addedProduct,result]);
    }

    //console.log(product);
    //console.log(addedProduct);

    const filteredProducts = product.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
        );
        
        console.log("filteredProducts");
        console.log(filteredProducts);

    return(

        <div>
        <div className="flex  justify-between p-10 pt-10">
            <motion.div  initial={{opacity:0,x:100}} animate={{ opacity: 1,x:0}} className="">Ecommerce</motion.div>
            {/* search functionality */}
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border px-2 py-1 rounded"
            />


            <div className="relative"><FaShoppingCart size={30} />
            <div className="absolute top-4 left-8">{addedProduct.length}</div>
            </div>
            
            </div>



        <div className="flex  flex-wrap gap-10 justify-center">
            {filteredProducts.length>0?<>
            
            {filteredProducts.map((e,i)=><ProductCard handleAdd={handleAdd} key={i} index={i} product={e}/>)}
            
            
            
            </>:<motion.div initial={{y:-100}} animate={{y:0}} className="text-center">No Products</motion.div>}

        </div>


    </div>


    )
}

export default Ecommerce