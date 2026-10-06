
import {Outlet, Link} from 'react-router';
import { FaSearch } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../assets/images/abacus logo.png';

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
                <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all'><Link to="/">Home</Link></li>
                <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all'><Link to="/about">About Us</Link></li>
                <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all'><Link to="/services/web">Web</Link></li>
                <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'><Link to="/services/mobile">Mobile</Link></li>

            </ul>
            <div className='relative hidden md:flex items-center justify-center'>
                <FaSearch size={20} color="gray" className='absolute left-3 text-2xl text-gray-500'/>
                <input type='text' placeholder='search'
                    className='py-2 pl-10 rounded-xl border-2
                    border-blue-300 focus:bg-slate-100 focus:outline-sky-500'/>
            </div> 

            <GiHamburgerMenu size={30} className='xl:hidden block text-5xl cursor-pointer'/>
        </div>
        <Outlet/>
    </div>
  )
}

export default Navbar;