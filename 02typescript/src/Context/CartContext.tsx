import React, { createContext } from "react";

export const CartContext = createContext();

export const CartProvider: React.FC<{children : React.ReactNode}> = ({children})=>{

    interface itemCountProps{
        id: number,
        image: String,
        title: String,
        price:number
    };

    interface cartProductCountProps{
        productId: number,
        productCount: number
    }

    const[itemCount, setItemCount] = React.useState<itemCountProps[][]>([]);
    const[productsList, setProductsList] = React.useState<{ id: number, image: String, title: String, price:number }[]>([]);
    const [cartProductCount, setCartProductCount] = React.useState<cartProductCountProps[]>([]);

    function addToCart(theId: number){
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

    function toDelete(removeId: number){
        
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