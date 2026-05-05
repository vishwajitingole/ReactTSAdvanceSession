import { Route, Routes } from "react-router";
import './App.css';
import Form from "./Components/Form";
import NotFound from "./Components/NotFound";
import Home from "./Home";
import MenuOptions from './MenuOptions';
import SplitScreen from './Screen/SplitScreen';

function App() {
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<SplitScreen Left={MenuOptions}/>}>

          <Route index element={<Home />} />
          <Route path="/form" element={<Form />} />
          {/* <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/cart" element={<Cart />} /> */}
          <Route path="*" element={<NotFound/>}/>

        </Route>


      </Routes>
    </div>
  )
}

export default App
