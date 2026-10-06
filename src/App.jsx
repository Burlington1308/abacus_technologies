import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
function App() {
  

  return (
    <>
      <Routes>
        <Route element={<Navbar/>}>
          <Route path="/" element={<Home/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
