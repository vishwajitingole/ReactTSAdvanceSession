import { lazy, Suspense } from "react";
const Profile = lazy( () => import("./Components/Profile"));

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

      {/* Profile component Section */}
      <section className="flex flex-col justify-center items-center gap-6">

          <h1 className="text-3xl font-bold">
            React Suspense Example
          </h1>

          <pre className="bg-gray-200 p-4 rounded">
            {`
              lazy()  -> component loads asynchronously
              Suspense -> handles loading state
              fallback -> temporary UI
            `}
          </pre>

          <Suspense fallback={<h2>Loading Profile...</h2>}>
            <Profile />
          </Suspense>

      </section>

    </div>
  )
}

export default Home