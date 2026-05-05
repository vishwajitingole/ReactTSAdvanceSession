import { useState } from "react";

type formObj = {
  id: number;
  name: string;
  contact: string;
  city: string;
}

function Form(){

  const initialFormState = {
    id:0,
    name:"",
    contact:"",
    city:""
  }

  const [fd, setFd] = useState<formObj>(initialFormState);
  const [submittedData, setSubmittedData] = useState<formObj | null>(null);

  const handleSubmit = (e : React.FormEvent) => {
      e.preventDefault();
      setSubmittedData(fd);
      //console.log(fd); 
      setFd(initialFormState); 

  }

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const {name,value } = e.target;

    setFd( (prev) => ({
      ...prev,
      [name]: value
    }));

  }

  return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
          
          <h1 className="text-2xl font-bold text-center mb-6">
            Employee Form
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            
            <input
              className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              name="id"
              value={fd.id}
              placeholder="Enter Id"
              onChange={handleChange}
            />

            <input
              className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              name="name"
              value={fd.name}
              placeholder="Enter Name"
              onChange={handleChange}
            />

            <input
              className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              name="contact"
              value={fd.contact}
              placeholder="Enter Contact"
              onChange={handleChange}
            />

            <input
              className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              name="city"
              value={fd.city}
              placeholder="Enter City"
              onChange={handleChange}
            />

            <button type="submit" className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition" >
              Submit
            </button>
          
          </form>

          <div className="mt-8 border-t pt-4">
            <h2 className="text-lg font-semibold text-center mb-4">
              Form Data
            </h2>

            <div className="space-y-2 text-gray-700">
              <p><span className="font-medium">ID:</span> {submittedData?.id}</p>
              <p><span className="font-medium">Name:</span> {submittedData?.name}</p>
              <p><span className="font-medium">Contact:</span> {submittedData?.contact}</p>
              <p><span className="font-medium">City:</span> {submittedData?.city}</p>
            </div>
          </div>

        </div>

      </div>
    );
}

export default Form;