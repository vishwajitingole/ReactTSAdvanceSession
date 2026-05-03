import { Route, Routes } from "react-router";
import Cart from "./Components/Cart";
import NotFound from "./Components/NotFound";
import Todo from "./Components/Todo";
import Ecommerce from "./Ecommerce";
import Home from "./Home";
import MenuOptions from "./MenuOptions";
import SplitScreen from "./Screen/SplitScreen";

export default function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<SplitScreen Left={MenuOptions}/>}>

          <Route index element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound/>}/>

        </Route>


      </Routes>
    
    
    
    
    
    </div>
  )
}
