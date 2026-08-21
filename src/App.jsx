import { useContext, useState } from "react";
import "./App.css";
import SignUpForm from "./component/SignUpForm";
import { Link, Route, Routes } from "react-router-dom";
import { AuthContext } from "./AuthContext";
// import Greetings from "./testComponent/Greetings";

// THINGS TO CHECK OUT :1)LOGICAL AND TERNARY OPERATION
// COMPONENTS ARE FUNCTIONS THAT RETURNS JSX *ONE OF THE ESSENCE OF USING COMPONENT IS THAT IF YOU HAVE A PARTICULAR PART OF THE WEBSITES THAT APPEARS IN MULTIPLE PLACES INSTEAD OF REWRITING THE SAME CODE YOU COULD CAN JUST CREATE COMPONENT AND REUSE IT
function Navbar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <header
      style={{
        padding: "1rem 1.5rem",
        marginBottom: "1rem",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <div>
        {!user.isAuth ? (
          <Link to="/login">Login</Link>
        ) : (
          <button onClick={logout}>logout</button>
        )}
      </div>
    </header>
  );
}

function HomePage() {
  const { user } = useContext(AuthContext);
  return (
    <div style={{ padding: "0 1.5rem" }}>
      <h1>HomePage</h1>
      {user.isAuth ? (
        <p>Welcome back, {user.name}</p>
      ) : (
        <p>You are not logged in. Go to the login page to sign in.</p>
      )}
    </div>
  );
}
function ProfilePage() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Profile</h1>
      <p>Name:{user.name}</p>
      <p>Here you could show more user info from the context</p>
    </div>
  );
}

function LoginPage() {
  const [name, setName] = useState("");
  const { user, login } = useContext(AuthContext);

  // const [user, setUser] = useState({ name: "", isAuth: false });

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      return;

      // setUser({ name: name, isAuth: true });
    }
    login(name);
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
        <label>
          Name{" "}
          <input
            type="text"
            placeholder="Type any name...."
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginLeft: "0.5rem" }}
          />
        </label>
        <button type="submit" style={{ marginLeft: "0.5rem" }}>
          Submit
        </button>
      </form>
      {user.isAuth && <p>User Logged in</p>}
    </div>
  );
}

function App() {
  const [user, setUser] = useState({ name: "", isAuth: false });

  function login(name) {
    setUser({ name: name, isAuth: true });
  }

  function logout() {
    setUser({ name: "", isAuth: false });
  }

  return (
    <div>
      <AuthContext.Provider value={{ user, login, logout }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="*"
            element={<h1 style={{ padding: "0 1.5rem" }}> Not Found</h1>}
          />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
