import { Outlet } from "react-router";
import { useDarkMode } from "../store/DarkMode";

function SplitScreen({ Left }) {
  const currentMode=useDarkMode((state)=>state.darkMode);
  console.log(currentMode);
  return (

    <div className="w-full h-screen flex">
        
        <div className={`w-1/8 ${currentMode?'bg-black text-white':'bg-white text-black'} `}>      
            <Left />
        </div>

        <div className="w-full bg-brown-900">
            <Outlet />
        </div>
  
    </div>
  )
}

export default SplitScreen