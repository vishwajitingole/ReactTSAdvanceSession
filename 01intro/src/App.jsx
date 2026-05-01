import Home from "./Home";
import MenuOptions from "./MenuOptions";
import SplitScreen from "./Screen/SplitScreen";

export default function App() {
  return (
    <div><SplitScreen Left={MenuOptions} Right={Home}/></div>
  )
}
