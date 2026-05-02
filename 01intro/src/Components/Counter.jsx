import React from "react";
function Counter() {
  const[num,setNum] =  React.useState(0);
  return (
    <>
        <div>{num}</div>
        <button onClick={()=>{
            setNum(prev=>prev+1);
        }} className="w-[10rem] rounded-md bg-blue-300 ">Badh jao</button>
    </>
  )
}

export default Counter