import { NavLink, useNavigate } from "react-router";


function MenuOptions() {
  const nav=useNavigate();

  function handleClick(){
    // logout
    nav("/notfound");
 
  }

  return (
    <div>
      <div className="flex flex-col p-10">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/todo">Todo</NavLink>
        <NavLink to="/ecommerce">Ecommerce</NavLink>
        {/* <NavLink to="/cart">Cart</NavLink> */}
       
        <button onClick={handleClick} className="border rounded border-black bg-green-600 text-white"
          >No Page
        </button>
        
      </div>
    </div>
  )
}

export default MenuOptions