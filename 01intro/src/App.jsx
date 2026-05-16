import { Toaster } from "react-hot-toast";
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
import RegisterPage from "./LoginModule/RegisterPage";
import MenuOptions from "./MenuOptions";
import SplitScreen from "./Screen/SplitScreen";

export default function App() {

  return (
    <div>
      <Toaster />

      <Routes>
      
        {/* Public Routes */}
        <Route path="/login" element={<AuthPage />}/>
        <Route path="/register" element={<RegisterPage />}/>

        {/* Protected Routes */}
        <Route path="/" element={<SplitScreen Left={MenuOptions}/>}>

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
