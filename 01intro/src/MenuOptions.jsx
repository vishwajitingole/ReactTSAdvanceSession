import { NavLink, useNavigate } from "react-router";
import useAuth from "./store/useAuth";


function MenuOptions() {
  const nav=useNavigate();
  const setLogin = useAuth( (state) => state.setIsLoggedIn );

  function handleClick(){
    // default page
    nav("/notfound");
 
  }

  function handleLogout(){
    setLogin(false);
  }

  return (
    <div>
      <div className="flex flex-col p-10">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/todo">Todo</NavLink>
        <NavLink to="/ecommerce">Ecommerce</NavLink>
        <NavLink to="/displayTable">DisplayTable</NavLink>
        <NavLink to="/loginTest">LoginTest</NavLink>
        <NavLink to="/form">Form</NavLink>
       
        <button onClick={handleClick} className="border rounded border-black bg-green-600 text-white"
          >No Page
        </button>
        <button onClick={handleLogout} className="border rounded border-black bg-red-600 text-white mt-5"
          >Log out
        </button>
        
      </div>
    </div>
  )
}

export default MenuOptions