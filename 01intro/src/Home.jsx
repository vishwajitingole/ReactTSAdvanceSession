import Todo from "./Components/Todo"

function Home() {
  return (
    <div className="flex h-screen justify-centery item-center">
        {/* <div className=""><Navbar/></div> */}
        Sudhanshu Koli 

        <div>
          {/* <Counter /> */}
          <Todo />
        </div>
    </div>
  )
}

export default Home