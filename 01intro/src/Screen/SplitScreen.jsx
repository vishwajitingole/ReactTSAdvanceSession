import { Outlet } from "react-router"

function SplitScreen({ Left }) {
  return (

    <div className="w-full flex">
        
        <div className="w-1/8 bg-gray-300">      
            <Left />
        </div>

        <div className="w-full bg-brown-400">
            <Outlet />
        </div>
  
    </div>
  )
}

export default SplitScreen