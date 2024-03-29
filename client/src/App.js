import React, { useContext } from "react";
import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Sidebar from "./components/sidebar/Sidebar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Context } from "./context/Context";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";


function App() {
  const {user} = useContext(Context)
  return (
    <>
    <BrowserRouter>
    <Topbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="settings" element={user?<Settings />:<Login />} />
      <Route path="post/:postId" element={<Single />} />
      <Route path="/write" element={user ? <Write /> : <Login /> } />
      
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;