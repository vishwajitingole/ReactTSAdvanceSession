import useCart from "../store/useCart";

function Cart(){
    const prod = useCart((state) => state.prod );

    console.log("inside cart comp");
    console.log(prod);
    

    return(

        <div>
            <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-purple-500 via-orange-500 to-red-500 text-transparent bg-clip-text mb-6">
                🛒 Cart Items
            </h2>

            <div className="flex flex-wrap gap-10 justify-center">
             
            {prod.map((e,i)=> 
            
                (
                    
                    <div key={i} className="bg-yellow-200 rounded-lg w-[20rem] h-[25rem] text-center overflow-hidden">
                        <div className="flex justify-center items-center">
                            <img className="w-auto h-[15rem]" src={e.image} alt="" />
                        </div>
                        
                            <div className="font-bold mt-10 ">{e.title.length > 10 ? e.title.substring(0, 20) + "..." : e.title}</div>
                            <div className="font-semibold mt-5">$ {e.price}</div>

                            
                    </div>
                )
            
            
             )}
             </div>

        </div>
    )


}

export default Cart