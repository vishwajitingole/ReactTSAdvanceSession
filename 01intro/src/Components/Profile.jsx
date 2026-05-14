// This profile component is being created for testing lazy + suspence
// This is being used in the Home.jsx page

// so suppose Profile component is a very heavy component and take a lot of time to load it will load lazyily in the home page

function Profile() {
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid gray",
        borderRadius: "10px",
        marginTop: "20px",
      }}
    >
      <h2>User Profile Component</h2>

      <p>Name: Ankush Sharma</p>
      <p>Email: ankush@example.com</p>
      <p>Role: Frontend Developer</p>
    </div>
  );
}

export default Profile;