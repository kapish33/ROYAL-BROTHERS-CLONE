import Nav from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router";
import { Signup } from "./components/Auth/Signup";
import { Login } from "./components/Auth/Login";

function App() {
  return (
    <>
      <div style={{ width: "100%", position: "absolute", zIndex: "14" }}>
        <Nav />
      </div>
      <div style={{ height: "80px", width: "100%" }}></div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
