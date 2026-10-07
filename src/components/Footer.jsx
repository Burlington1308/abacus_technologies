import { FaHome, FaGlobe, FaMobile, FaDesktop, FaChartLine, FaWhatsapp, FaFacebook, FaPhone, FaEnvelope } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="w-full bg-slate-900 text-white">
        <div className="w-full flex flex-col gap-8 md:flex-row p-4 ">
            <div className="w-full md:w-1/2 flex flex-col items-center">
                <h2 className="text-center text-2xl mb-4">Sitemap</h2>
                <li className='list-none w-full flex items-center justify-center gap-4 p-4
                    hover:bg-sky-400 hover:text-white transition-all cursor-pointer'
                >
                    <FaHome size={24}/>
                    <Link to="/">Home</Link>
                </li>
                <li className='list-none w-full flex items-center justify-center gap-4 p-4
                    hover:bg-sky-400 hover:text-white transition-all cursor-pointer'
                >
                    <BsInfoCircle size={24}/>
                    <Link to="/about">About Us</Link>
                </li>
                <li className='list-none w-full flex items-center justify-center gap-4 p-4
                    hover:bg-sky-400 hover:text-white transition-all cursor-pointer'
                >
                    <FaGlobe size={24}/>
                    <Link to="/services/web">Web</Link>
                </li>
                <li className='list-none w-full flex items-center justify-center gap-4 p-4
                    hover:bg-sky-400 hover:text-white transition-all cursor-pointer'
                >
                    <FaMobile size={24}/>
                    <Link to="/services/mobile">Mobile</Link>
                </li>
                <li className='list-none w-full flex items-center justify-center gap-4 p-4
                    hover:bg-sky-400 hover:text-white transition-all cursor-pointer'
                >
                    <FaDesktop size={24}/>
                    <Link to="/services/desktop">Desktop</Link>
                </li>
                <li className='list-none w-full flex items-center justify-center gap-4 p-4
                    hover:bg-sky-400 hover:text-white transition-all cursor-pointer'
                >
                    <FaChartLine size={24}/>
                    <Link to="/services/seo">SEO</Link>
                </li>
            </div>

            <div className="w-full md:w-1/2 flex flex-col  items-center">
                <h2 className="text-center text-2xl mb-4">Contact Us</h2>

                <li className='list-none w-full flex items-center justify-center gap-4 p-4
                    hover:bg-sky-400 hover:text-white transition-all cursor-pointer'
                >
                    <FaWhatsapp size={24}/>
                    <Link to="https://wa.me/27619941652">Whatsapp</Link>
                </li>
                <li className='list-none w-full flex items-center justify-center gap-4 p-4
                    hover:bg-sky-400 hover:text-white transition-all cursor-pointer'
                >
                    <FaFacebook size={24}/>
                    <Link to="https://www.facebook.com/profile.php?id=100093242663380">Facebook</Link>
                </li>
                <li className='list-none w-full flex items-center justify-center gap-4 p-4
                    hover:bg-sky-400 hover:text-white transition-all cursor-pointer'
                >
                    <FaPhone size={24}/>
                    <a href="tel:+27626556855">Call Us</a>
                </li>
                <li className='list-none w-full flex items-center justify-center gap-4 p-4
                    hover:bg-sky-400 hover:text-white transition-all cursor-pointer'
                >
                    <FaEnvelope size={24}/>
                    <a href="mailto:burlington@abacustechnologies.co.za">Email</a>
                </li>

            </div>
        </div>
        <p className="text-center">abacus technologies &copy; 2026</p>
    </div>
  )
}

export default Footer;