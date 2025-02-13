import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Login from "./Login/Login";
import SignUp from "./Login/SignUp";


function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
       <Route path="/hr/*" element={<Layout/>}/>
      </Routes>
    </>
  );
}

export default App;
