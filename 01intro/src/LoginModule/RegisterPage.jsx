import { useState } from "react";
import { NavLink } from "react-router";

function RegisterPage(){
     const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    //const [token, setToken] = useState("");
    //const navigate = useNavigate();

    function handleClick (){
        console.log("you clicked register button");
        alert("you clicked register button");
    }

    return(

        <div className="bg-gray-600 min-h-screen flex items-center justify-center">
        
            <div className="bg-gray-300 flex flex-col gap-4 p-8 w-full max-w-md shadow-lg rounded-2xl" >

                <h1 className="text-2xl font-bold text-center">
                    Register
                </h1>

                <input
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border p-2 rounded-xl"
                />

                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 rounded-xl"
                />

                <button
                    onClick={handleClick}
                    className="bg-blue-500 text-white p-2 rounded-xl"
                >
                    Register
                </button>
                
                <NavLink to="/login" className="text-center">
                    <span className="text-lg text-blue-600">Go To Login Page</span> 
                </NavLink>

                
            </div>
        </div>



    )
}

export default RegisterPage;