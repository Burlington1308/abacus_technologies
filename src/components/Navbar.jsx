import {useState} from 'react';
import {Outlet, Link, useNavigate} from 'react-router';
import { FaSearch, FaHome, FaGlobe, FaMobile, FaDesktop, FaChartLine, FaEnvelope } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsInfoCircle } from 'react-icons/bs';
import Logo from '../assets/images/abacus logo.png';
import {pages} from "../assets/Pages"

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();

        const cleanQuery = query.trim().toLowerCase();
        if (!cleanQuery) return;

        //1. Try to find an exact title match or keyword match
        const bestMatch = pages.find( page => 
            page.title.toLowerCase().includes(cleanQuery) || 
            page.keywords.some(keyword => cleanQuery.includes(keyword))
        );

        // 2. Redirect if a match is found, otherwise show an error
        if (bestMatch) {
            navigate(bestMatch.path);
            setQuery(""); // Clear the input
        } else {
            alert("Not found!!");
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch(e);
        }
    }

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
            <div className='relative flex items-center justify-center'>
                <FaSearch size={20} 
                    color="gray" 
                    className='absolute left-3 text-2xl text-gray-500 cursor-pointer'
                    onClick={handleSearch}
                />
                <input type='text' placeholder='search'
                    className='py-1 md:py-2 pl-10 rounded-xl border-2
                    border-blue-300 focus:bg-slate-100 focus:outline-sky-500'
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div> 

            <GiHamburgerMenu size={30} className='xl:hidden block text-5xl cursor-pointer'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            />

            <div className={`absolute xl:hidden top-full left-0 w-full bg-white z-50
                flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform
                ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
                style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}
            >
                <li className='list-none w-full flex items-center justify-center  p-4
                    hover:bg-sky-400 hover:text-white transition-all cursor-pointer'
                >  
                    <Link to="/" className='w-full flex items-center justify-center gap-4' onClick={() => setIsMenuOpen(false)}><FaHome size={24}/> Home</Link>
                </li>
                <li className='list-none w-full flex items-center justify-center gap-4 p-4
                    hover:bg-sky-400 hover:text-white transition-all cursor-pointer'
                >               
                    <Link to="/about" className='w-full flex items-center justify-center gap-4' onClick={() => setIsMenuOpen(false)}><BsInfoCircle size={24}/> About Us</Link>
                </li>
                <li className='list-none w-full flex items-center justify-center gap-4 p-4
                    hover:bg-sky-400 hover:text-white transition-all cursor-pointer'
                >                    
                    <Link to="/services/web" className='w-full flex items-center justify-center gap-4' onClick={() => setIsMenuOpen(false)}><FaGlobe size={24}/> Web</Link>
                </li>
                <li className='list-none w-full flex items-center justify-center gap-4 p-4
                    hover:bg-sky-400 hover:text-white transition-all cursor-pointer'
                >                    
                    <Link to="/services/mobile" className='w-full flex items-center justify-center gap-4' onClick={() => setIsMenuOpen(false)}><FaMobile size={24}/> Mobile</Link>
                </li>
                <li className='list-none w-full flex items-center justify-center gap-4 p-4
                    hover:bg-sky-400 hover:text-white transition-all cursor-pointer'
                >                    
                    <Link to="/services/desktop" className='w-full flex items-center justify-center gap-4' onClick={() => setIsMenuOpen(false)}><FaDesktop size={24}/> Desktop</Link>
                </li>
                <li className='list-none w-full flex items-center justify-center gap-4 p-4
                    hover:bg-sky-400 hover:text-white transition-all cursor-pointer'
                >                    
                    <Link to="/services/seo" className='w-full flex items-center justify-center gap-4' onClick={() => setIsMenuOpen(false)}><FaChartLine size={24}/> SEO</Link>
                </li>
                <li className='list-none w-full flex items-center justify-center gap-4 p-4
                    hover:bg-sky-400 hover:text-white transition-all cursor-pointer'
                >                    
                    <Link to="/contact" className='w-full flex items-center justify-center gap-4' onClick={() => setIsMenuOpen(false)}><FaEnvelope size={24}/> Contact</Link>
                </li>
            </div>
        </div>
        <Outlet/>
    </div>
  )
}

export default Navbar;