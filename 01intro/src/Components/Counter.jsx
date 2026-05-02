import React from "react";
import { useDarkMode } from "../store/DarkMode";
function Counter() {
  const[num,setNum] =  React.useState(0);
  const handleDark=useDarkMode((state)=>state.ghumJaa)
  return (
    <>
        <div>{num}</div>
        <button onClick={()=>{
            setNum(prev=>prev+1);
        }} className="w-[10rem] rounded-md bg-blue-300 ">Badh jao</button>
        <button onClick={()=>handleDark()}>Naam do </button>
    </>
  )
}

export default Counter