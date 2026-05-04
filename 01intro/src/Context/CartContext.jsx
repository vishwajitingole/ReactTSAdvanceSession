import React, { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({children})=>{

    const[itemCount, setItemCount] = React.useState([]);
    const[productsList, setProductsList] = React.useState([]);
    const [cartProductCount, setCartProductCount] = React.useState([{
        productId: null,
        productCount: null
    }]);

    function addToCart(theId){
        const result = productsList.filter((e)=> e.id === theId);

        const isExist = itemCount.find((e)=> e[0].id === theId);

        
        if(isExist){
            setCartProductCount((prev)=>
                prev.map((e)=>{
                    return  e.productId === theId ? { ...e, productCount: e.productCount + 1} : e
                })
            )
        }else{
            setItemCount([...itemCount, result]);
            setCartProductCount([...cartProductCount, {productId: result[0].id, productCount: 1}])
        }        

        const theCount = cartProductCount.reduce(
                (sum, e) => sum + e.productCount, 0
            );

        console.log("THE COUNT IS - " + theCount);
    }

    function toDelete(removeId){
        
        const itemCountResult = itemCount.filter((e)=>{
            e[0].id !== removeId
            console.log("The removeId - " + removeId + "and eid - " + e[0].id);
            return e[0].id !== removeId;
        });
        setItemCount(itemCountResult);

        const cartCountResult = cartProductCount.filter((e)=>{
            return e.productId !== removeId;
        })

        setCartProductCount(cartCountResult);
        
    }

    return(
        <CartContext.Provider value={{cartProductCount, itemCount, setItemCount, productsList, setProductsList, addToCart, toDelete, setCartProductCount}}>
            {children}
        </CartContext.Provider>
    )
};