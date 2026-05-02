import { Route, Routes } from "react-router";
import Counter from "./Components/Counter";
import NotFound from "./Components/NotFound";
import Todo from "./Components/Todo";
import Ecommerce from "./Ecommerce";
import MenuOptions from "./MenuOptions";
import SplitScreen from "./Screen/SplitScreen";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SplitScreen Left={MenuOptions} />}>
         <Route index element={<Counter />} />
         <Route path="/todo" element={<Todo />} />
         <Route path="/ecommerce" element={<Ecommerce />} />
         <Route path="*" element={<NotFound/>}/>

         
        </Route>
      </Routes>
      
    
      </div>
  )
}
