import { Route, Routes } from "react-router";
import Cart from "./Components/Cart";
import Counter from "./Components/Counter";
import Ecommerce from "./Components/Ecommerce";
import NoPage from "./Components/NoPage";
import ProductPage from "./Components/ProductPage";
import Todo from "./Components/Todo";
import MenuOptions from "./MenuOptions";
import SplitScreen from "./Screen/SplitScreen";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SplitScreen Left={MenuOptions} />} >
          <Route index element={<Counter />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/ecommerce" element={<Ecommerce />}/>
          <Route path="/product/:id" element={<ProductPage />}/>
          <Route path="*" element={<NoPage />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  )
}
