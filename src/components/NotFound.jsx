import ErrorImage from "../assets/images/PageNotFound404.gif";
import { Link } from "react-router";


const NotFound = () => {
  return (
    <div className="min-h-[60vh] w-full p-16 flex flex-col
      items-center justify-center text-slate-800">
        <img src={ErrorImage} className="w-full md:w-1/2"/>
        <h1 className="text-center text-3xl font-semibold">The page you are looking for was not found.</h1>
        <h2 className="text-center text-3xl text-sky-400 cursor pointer font-semibold"><Link to="/">Go back to home</Link></h2>
    </div>
  )
}

export default NotFound;