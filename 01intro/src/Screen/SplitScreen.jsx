import { Navigate, Outlet } from "react-router";
import useAuth from "../store/useAuth";

function SplitScreen({ Left }) {

  const CheckLogin = useAuth( (state) => state.isLoggedIn );

   // If not logged in redirect to login page
  if (!CheckLogin) {
    return <Navigate to="/login" replace />;
  }

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