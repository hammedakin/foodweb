import { Route, Routes } from "react-router-dom"
import './App.css';
import Footer from "./Components/Footer";
import './Components/Home/Homepage.css'
import Navbar from './Components/Navbar'
import About from "./Pages/About";
import Home from "./Pages/Home"
function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
