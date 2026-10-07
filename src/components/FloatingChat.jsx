import { Link } from "react-router"

const FloatingChat = () => {
  return (
    <div className="py-2 px-4 rounded-md bg-sky-500 fixed top-150 right-4
        text-white drop-shadow-md animate-pulse">
        <Link to="https://wa/me/27619941652">Chat With Us</Link>
    </div>
  )
}

export default FloatingChat