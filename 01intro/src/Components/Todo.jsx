import React from "react";

function Todo() {
    const[todo,setTodo]=React.useState([]);
    const [input,setInput]=React.useState("Enter your Todo");

    function handleClick (){
        setTodo([...todo, input]);
        setInput("");
    }

    function handleDelete (val){
        const updatedTodo = todo.filter((e, i) => i !== val);
        setTodo(updatedTodo);
    }


  return (
    <div className=" flex flex-col gap-5 items-center justify-center h-[70vh] rounded-xl bg-stone-200">

        <div className="">  
            <input value={input} onChange={(e)=>setInput(e.target.value)} className=" bg-white rounded-lg w-50 px-2 py-2 border border-2 " type="text" /></div>
        <div className="">
            <button onClick={handleClick} className="w-full h-full px-1 py-2 bg-green-400 rounded-sm">Click to Add Todo</button>
        </div>

        {
        todo.map((e,i)=> <div key={i}>
                <div className="name"><li>{e}</li></div>
                <button onClick={ () => handleDelete(i) } className="w-full h-10 px-1 py-2 bg-red-800 rounded-sm">Delete</button>
            </div>)}
      


    </div>
  )
}

export default Todo