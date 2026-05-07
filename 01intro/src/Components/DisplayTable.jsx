import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";


function DisplayTable(){
  const [data, setData] = useState([]);

  useEffect( ()=>{

    async function fetchData(){
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
    }

    fetchData();

  } ,[]);

  console.log(data.length);

  if(data.length == 0){
    return(
      <motion.div initial={{y:-100}} animate={{y:0}} className="text-center">No Data Found</motion.div>
    )
  }

  return (
      <div className="min-h-screen bg-gray-100 p-8">
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-10 text-gray-800"
        >
          Ecommerce Data
        </motion.h1>

        <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
          
          <table className="w-full text-sm text-left text-gray-700">
            
            <thead className="bg-gray-800 text-white uppercase text-sm">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Description</th>
              </tr>
            </thead>

            <tbody>
              {data.map((e) => (
                <tr
                  key={e.id}
                  className="border-b hover:bg-gray-100 transition duration-200"
                >
                  <td className="px-6 py-4 font-medium">{e.id}</td>

                  <td className="px-6 py-4 max-w-[200px] truncate">
                    {e.title}
                  </td>

                  <td className="px-6 py-4 text-green-600 font-semibold">
                    ₹ {e.price}
                  </td>

                  <td className="px-6 py-4 capitalize">
                    {e.category}
                  </td>

                  <td className="px-6 py-4 max-w-[350px] truncate">
                    {e.description}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>
      </div>
)

}

export default DisplayTable