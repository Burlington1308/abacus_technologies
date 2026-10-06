import {useState} from 'react';
import {Outlet, Link} from 'react-router';
import { FaSearch } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../assets/images/abacus logo.png';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
        <div className='flex justify-between items-center text-slate-800 py-6 px-8
            md:px-32 bg-white shadow-md relative'>
            <div className=''>
                <Link to="/"><img src={Logo} className='w-14 hover:scale-105 transition-all'/></Link>
            </div>

            <ul className='hidden xl:flex items-center gap-6
                font-semibold text-base'>
                <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all'><Link to="/">Home</Link></li>
                <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all'><Link to="/about">About Us</Link></li>
                <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all'><Link to="/services/web">Web</Link></li>
                <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'><Link to="/services/mobile">Mobile</Link></li>
                <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'><Link to="/services/desktop">Desktop</Link></li>
                <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'><Link to="/services/seo">SEO</Link></li>
                <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'><Link to="/contact">Contact</Link></li>

            </ul>
            <div className='relative hidden md:flex items-center justify-center'>
                <FaSearch size={20} color="gray" className='absolute left-3 text-2xl text-gray-500'/>
                <input type='text' placeholder='search'
                    className='py-2 pl-10 rounded-xl border-2
                    border-blue-300 focus:bg-slate-100 focus:outline-sky-500'/>
            </div> 

            <GiHamburgerMenu size={30} className='xl:hidden block text-5xl cursor-pointer'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            />

            <div className={`absolute xl:hidden top-full left-0 w-full bg-white z-50
                flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform
                ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
                style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}
            >
                <li className='list-none w-full text-center p-4
                    hover:bg-sky-400 hover:text-white transition-all cursor-pointer'
                >
                    Home
                </li>
                <li className='list-none w-full text-center p-4
                    hover:bg-sky-400 hover:text-white transition-all cursor-pointer'
                >
                    <Link to="/about">About Us</Link>
                </li>
                <li className='list-none w-full text-center p-4
                    hover:bg-sky-400 hover:text-white transition-all cursor-pointer'
                >
                    <Link to="/services/web">Web</Link>
                </li>
                <li className='list-none w-full text-center p-4
                    hover:bg-sky-400 hover:text-white transition-all cursor-pointer'
                >
                    <Link to="/services/mobile">Mobile</Link>
                </li>
                <li className='list-none w-full text-center p-4
                    hover:bg-sky-400 hover:text-white transition-all cursor-pointer'
                >
                    <Link to="/services/desktop">Desktop</Link>
                </li>
                <li className='list-none w-full text-center p-4
                    hover:bg-sky-400 hover:text-white transition-all cursor-pointer'
                >
                    <Link to="/services/seo">SEO</Link>
                </li>
                <li className='list-none w-full text-center p-4
                    hover:bg-sky-400 hover:text-white transition-all cursor-pointer'
                >
                    <Link to="/contact">Contact</Link>
                </li>
            </div>
        </div>
        <Outlet/>
    </div>
  )
}

export default Navbar;