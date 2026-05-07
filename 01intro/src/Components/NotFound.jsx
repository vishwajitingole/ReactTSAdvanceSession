import { useNavigate } from "react-router";



function NotFound() {

  const navigate = useNavigate();


  return (
    <div className="mt-10">
      <p className="text-center">Not Found </p>
      <p className="text-center"> User will be redirected here, if there is no such path as entered by the user</p>

      <div className="flex justify-center mt-2">
        <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-black px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-200 transition"
          >
            Go To Home
        </button>
      </div>

    </div>

    
    
  )
}

export default NotFound

