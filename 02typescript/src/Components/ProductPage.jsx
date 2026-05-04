import axios from "axios";
import { motion } from "motion/react";
import React from "react";
import { useNavigate, useParams } from "react-router";

export default function ProductPage(){
    const navigate = useNavigate();
 
    const [theProduct, setTheProduct] = React.useState({});

    const {id} = useParams();
    const {image, title, price } = theProduct;

    React.useEffect(()=>{

        async function getProduct(){
            let response = await axios.get(`https://fakestoreapi.com/products/${id}`);

            setTheProduct(response.data);
        }

        getProduct();

    },[id]);

    function backToList(){
        navigate("/ecommerce")
    }

    return(<>
        
            <div className="rounded-lg w-full h-screen b-10 bg-mist-300 flex flex-col items-center">
            <img className="h-fullp-10" src={image} alt="image here" />
            <p className="text-3xl">{title}</p>
            <p className="text-2xl">PRICE: {price}</p>
            <motion.button onClick={backToList} whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} className="bg-green-300 border rounded-lg my-10 text-2xl w-[15rem] h-[3rem] cursor-pointer">Back to list</motion.button>
        </div>

        </>)

}