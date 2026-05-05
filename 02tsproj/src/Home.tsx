
function Home() {
  return (
    
        
    <div className="p-6 space-y-10">

      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">
          Welcome to Your Productivity Hub 🚀
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Manage your daily tasks, explore e-commerce features, and stay organized — all in one place.
          This app is designed to help you learn and build real-world projects using React and TypeScript.
        </p>
      </section>

      {/* Image Section */}
      <section className="flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Productivity"
          className="rounded-2xl shadow-lg w-[500px] object-cover"
        />
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="p-4 bg-gray-100 rounded-xl shadow">
          <h2 className="text-xl font-semibold">📝 Todo Manager</h2>
          <p className="text-gray-600 mt-2">
            Add, delete, and track your daily tasks efficiently.
          </p>
        </div>

        <div className="p-4 bg-gray-100 rounded-xl shadow">
          <h2 className="text-xl font-semibold">🛒 E-commerce</h2>
          <p className="text-gray-600 mt-2">
            Browse products and simulate a real shopping experience.
          </p>
        </div>

        <div className="p-4 bg-gray-100 rounded-xl shadow">
          <h2 className="text-xl font-semibold">⚡ Fast & Modern</h2>
          <p className="text-gray-600 mt-2">
            Built using Vite, React, and TypeScript for top performance.
          </p>
        </div>

      </section>

    </div>

    
  )
}

export default Home