import { Route, Routes } from "react-router";
import Cart from "./Components/Cart";
import DisplayTable from "./Components/DisplayTable";
import Form from "./Components/Form";
import LoginTest from "./Components/LoginTest";
import NotFound from "./Components/NotFound";
import Todo from "./Components/Todo";
import Ecommerce from "./Ecommerce";
import Home from "./Home";
import AuthPage from "./LoginModule/AuthPage";
import MenuOptions from "./MenuOptions";
import SplitScreen from "./Screen/SplitScreen";
import useAuth from "./store/useAuth";

export default function App() {

  const CheckLogin = useAuth( (state) => state.isLoggedIn );
  //console.log(CheckLogin);

  return (
    <div>

      <Routes>
        <Route path="/" element={
                    CheckLogin ? <SplitScreen Left={MenuOptions}/>
                    : <AuthPage/>
                    }>

          <Route index element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/displayTable" element={<DisplayTable />} />
          <Route path="/loginTest" element={<LoginTest />} />
          <Route path="/form" element={<Form />} />
          <Route path="*" element={<NotFound/>}/>

        </Route>


      </Routes>
    
    </div>
  )
}
