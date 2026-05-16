import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router";
import useAuth from "../store/useAuth";

function AuthPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    const navigate = useNavigate();
    

    const setLoggedIn = useAuth( (state) => state.setIsLoggedIn );

    async function handleLogin() {

        const credentials = {
            username,
            password
        };

        try {

            const response = await axios.post(
                "https://login-logout-alpha.vercel.app/login",
                credentials
            );

            console.log(response.data);
            setToken(response.data.token);
            //alert("Login Successful");
            toast.success("Login Successful");
            setLoggedIn(true);
            navigate("/");
            

        } catch (err) {

            console.log(err);
            setLoggedIn(false);
            toast.error("Login Failed");
            
        }
    }

    
    return (

        <div className="bg-gray-600 min-h-screen flex items-center justify-center">
        
            <div className="bg-gray-300 flex flex-col gap-4 p-8 w-full max-w-md shadow-lg rounded-2xl" >

                <h1 className="text-2xl font-bold text-center">
                    Login
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
                    onClick={handleLogin}
                    className="bg-blue-500 text-white p-2 rounded-xl"
                >
                    Login
                </button>
                
                <NavLink to="/register" className="text-center">
                    <span className="text-lg text-blue-600">New Here ? Register / Signup</span> 
                </NavLink>

                
            </div>
        </div>
    );
}

export default AuthPage;