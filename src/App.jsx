import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
function App() {
  

  return (
    <div className="w-full h-full absolute ">
      <Routes>
        <Route element={<Navbar/>}>
          <Route path="/" element={<Home/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
