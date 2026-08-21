import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import Navbar from "./component/Navbar";

// THINGS TO CHECK OUT :1)LOGICAL AND TERNARY OPERATION
// COMPONENTS ARE FUNCTIONS THAT RETURNS JSX *ONE OF THE ESSENCE OF USING COMPONENT IS THAT IF YOU HAVE A PARTICULAR PART OF THE WEBSITES THAT APPEARS IN MULTIPLE PLACES INSTEAD OF REWRITING THE SAME CODE YOU COULD CAN JUST CREATE COMPONENT AND REUSE IT

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
