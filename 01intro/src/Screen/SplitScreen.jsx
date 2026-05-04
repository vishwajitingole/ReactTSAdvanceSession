import { Outlet } from "react-router"

function SplitScreen({ Left }) {
  return (

    <div className="w-full h-screen flex">
        
        <div className="w-1/8 bg-red-300">      
            <Left />
        </div>

        <div className="w-full bg-red-50">
            <Outlet />
        </div>
  
    </div>
  )
}

export default SplitScreen