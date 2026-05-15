import axios from "axios";
import { useState } from "react";
import useAuth from "../store/useAuth";

function AuthPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    //const [products, setProducts] = useState([]);

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
            setLoggedIn(true);
            

        } catch (err) {

            console.log(err);
            setLoggedIn(false);
            //alert("Login Failed");
            
        }
    }

    // async function fetchProducts() {

    //     try {

    //         const response = await axios.get(
    //             "https://login-logout-alpha.vercel.app/products",
    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`
    //                 }
    //             }
    //         );

    //         console.log(response.data);

    //         setProducts(response.data);

    //     } catch (err) {

    //         console.log(err);

    //         alert("Unauthorized");
    //     }
    // }

    return (
        <div className="flex flex-col gap-4 p-10">

            <h1 className="text-2xl font-bold">
                Login Module
            </h1>

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

            <h2>
                Token: {token}
            </h2>

            {/* <button
                onClick={fetchProducts}
                className="bg-green-500 text-white p-2"
            >
                Get Products
            </button>

            {
                products.map((product) => (
                    <div
                        key={product.id}
                        className="border p-2"
                    >
                        <h2>{product.name}</h2>
                        <p>₹ {product.price}</p>
                    </div>
                ))
            } */}

        </div>
    );
}

export default AuthPage;