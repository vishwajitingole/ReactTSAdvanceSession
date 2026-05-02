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
        <NavLink to="/">Counter</NavLink>
        <NavLink to="/todo">Todo</NavLink>
        <NavLink to="/ecommerce">Ecommerce</NavLink>
       
        <button onClick={handleClick}>Kahi toh</button>
      </div>
    </div>
  )
}

export default MenuOptions