
import {Outlet, Link} from 'react-router';
import { FaHome } from 'react-icons/fa';
import Logo from '../assets/images/abacus logo.png'

const Navbar = () => {

  return (
    <div>
        <div className='flex justify-between items-center text-slate-800 py-6 px-8
            md:px-32 bg-white drop-shadow-md'>
            <div className=''>
                <Link to="/"><img src={Logo} className='w-14 hover:scale-105 transition-all'/></Link>
            </div>

            <ul className='hidden xl:flex items-center gap-12
                font-semibold text-base'>
                <li className='p-3 hover:bg-sky-400 hover-text-white rounded-md transition-all'><Link to="/" className='hover-text-white '>Home</Link></li>
                <li className='p-3 hover:bg-sky-400 hover-text-white rounded-md transition-all'><Link to="/about">About Us</Link></li>
                <li className='p-3 hover:bg-sky-400 hover-text-white rounded-md transition-all'><Link to="/services/web">Web</Link></li>
                <li className='p-3 hover:bg-sky-400 hover-text-white rounded-md transition-all'><Link to="/services/mobile">Mobile</Link></li>

            </ul>
        </div>
        <Outlet/>
    </div>
  )
}

export default Navbar;