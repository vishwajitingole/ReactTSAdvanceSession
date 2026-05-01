import React from "react";

function Counter(){

    const [count, setCount] = React.useState(0);
;

    return(<>
        <div>{count}</div>

        <button onClick={()=>{
            setCount(prev=>prev+1)
        }} className="w-[100px] rounded-md bg-green-500 cursor-pointer">Increase</button>
    </>)

}

export default Counter;