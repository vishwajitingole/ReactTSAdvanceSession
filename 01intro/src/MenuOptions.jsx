import { NavLink, useNavigate } from "react-router";

function MenuOptions() {

  const navigate = useNavigate();

  const handleClick = ()=>{
    navigate("/NoPage");
  }

  return (<>
    <div>MenuOptions</div>
    <div className="flex flex-col p-5">
      <NavLink to="/">COUNTER</NavLink>
      <NavLink to="/todo">TODO</NavLink>
      <NavLink to="ecommerce">E-Commerce</NavLink>
      <button className="cursor-pointer" onClick={handleClick} >Error de</button>
    </div>

  </>)
}

export default MenuOptions