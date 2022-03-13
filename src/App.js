import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import AddContact from "./components/AddContact";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          
          <Route path="/addcontact" element={<AddContact />}></Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
