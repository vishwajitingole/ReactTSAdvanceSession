import Navbar from "./Components/Navbar"
import Todo from "./Components/Todo"

function Home() {
  return (
    <div>
        <div className=""><Navbar/></div>
        {/* Ankush Sharma */}
        <Todo />
    </div>
  )
}

export default Home