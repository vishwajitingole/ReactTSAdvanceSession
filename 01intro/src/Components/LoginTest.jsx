import axios from "axios";
import { useEffect, useState } from "react";

function LoginTest() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    

    useEffect( () =>{
    
            async function fetchData(){
                const res = await axios("https://fakestoreapi.com/users");
                console.log("This is the list of users available on the fakeApi");
                console.log(res.data);
                
                
            }
    
            fetchData();
        } ,[])

    async function handleLogin() {

        const credentials = {
            username,
            password
        };

        try {

            const response = await axios.post("https://fakestoreapi.com/auth/login", credentials );

            console.log(response.data);
            setToken(response.data.token);

        } catch (err) {
            console.log("Login failed");
            console.log(err);
            setToken("login failed");
        }
    }
    

    return (
        <div className="flex flex-col gap-4 p-10">

            <h1>Login Test Component</h1>
            <h1>token is == {token}</h1>

            <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border p-2"
            />

            <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2"
            />

            <button
                onClick={handleLogin}
                className="bg-blue-500 text-white p-2"
            >
                Login
            </button>

            

        </div>
    );
}

export default LoginTest;