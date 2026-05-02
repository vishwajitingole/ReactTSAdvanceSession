import axios from "axios";
import React from "react";
import { useParams } from "react-router";
function ProductPage() {
    const [product,setProduct]=React.useState({});

    const {id}=useParams();

    React.useEffect(()=>{

       async function call(){
            let data = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProduct(data.data);
        }

        call();

    },[id])
  return (
    <div>
        <img src={product.image} alt="" />
    </div>
  )
}

export default ProductPage