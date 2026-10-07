import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Web from "./components/Web"
import Mobile from "./components/Mobile";
import Desktop from "./components/Desktop";
import SEO from "./components/SEO";
import Contact from "./components/Contact";
function App() {
  

  return (
    <div className="w-full h-full absolute ">
      <Routes>
        <Route element={<Navbar/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services/web" element={<Web/>}/>
          <Route path="/services/mobile" element={<Mobile/>}/>
          <Route path="/services/desktop" element={<Desktop/>}/>
          <Route path="/services/seo" element={<SEO/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
