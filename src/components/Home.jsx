import bgImage from '../assets/images/office.jpg';
import { FaCode, FaBusinessTime, FaSearch, FaChartBar, FaMousePointer, FaMobile, FaLaptop } from 'react-icons/fa';
import { BrainCircuit } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-dvh w-full">
      <div className=" h-dvh w-full bg-cover bg-center relative"
        style={{backgroundImage: `url(${bgImage})`}}
      >
        <div className='h-inherit w-full bg-black/70 absolute inset-0 flex flex-col items-center justify-center'>
            <h1 className='text-5xl font-bold text-white text-center'>
              The Premier Software Development Team
            </h1>
            <p className='text-2xl font-bold text-white text-center'>
              Tailored software that meets your business needs
            </p>

            <div className="flex flex-col gap-4 md:flex-row mt-16 w-1/2 items-center justify-around">
              {/*<a className='bg-sky-500 py-2 px-4 text-white rounded-md hover:bg-sky-600 transition-all'
                href="https://wa.me/27619941652"
              >
                Get In Touch
              </a>*/}
              <a className='bg-red-500 py-2 px-4 text-white rounded-md hover:bg-red-600 transition-all'
                href="https://wa.me/27619941652"
              >
                Get In Touch
              </a>
            </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row p-12 items-center justify-around gap-16 text-slate-800">
        <div className=" w-full md:w-1/3 flex flex-col items-center p-2">
          <FaCode size={80}/>
          <h3 className='text-xl font-semibold'>Custom Tailored Software</h3>
          <p className='text-slate-600 text-center'>
            Almost right is not good enough.
            Get quality software designed and built to your 
            specific business needs. 
          </p>
        </div>

        <div className="w-full md:w-1/3 flex flex-col items-center ">
          <FaBusinessTime size={80}/>
          <h3 className='text-xl font-semibold'>Cost-effective Business Solutions</h3>
          <p className='text-slate-600 text-center'>
            Software solutions that provide quality at favourable
            cost. Get value without compromising permorfance, security
            or efficiency.
          </p>
        </div>

        <div className="w-full md:w-1/3 flex flex-col items-center ">
          <BrainCircuit size={80}/>
          <h3 className='text-xl font-semibold'>Innovative Design</h3>
          <p className='text-slate-600 text-center'>
            Get solutions that get past challenges by innovating 
            and applying novel thinking to problems. Our team thinks outside 
            the box to deliver solutions.
          </p>
        </div>
      </div>

      <div className='w-full p-16 text-slate-600'>
        <h2 className='text-center text-3xl font-bold text-slate-800'>Claim Your Place In A Digital World</h2>
        <p className='text-center py-4'>
          The whole world is now online. Your brand should be there too.
          We help you build a visible, trusted and intentional home base on the digital plane.
        </p>
        <p className='text-center py-4'>
          From a responsive website that is designed to be you 24/7 digital storefront, 
          your town square, brand communication outlet or whatever you need it to be, to mobile applications,
          desktop applications, a Google Business Profile to cover local searches, SEO to ensure that 
          you are at the very top of responses for what your potential clients and customers are looking for.
        </p>
        <p className='text-center py-4'>
          We assist you in finding your own voice, building the software 
          tools that make your job easier and more efficient, all with your input every step of the way.
        </p>
      </div>

      <div className='w-full px-16 py-4 text-slate-600 grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className="w-full md:basis-[calc(33.333%-1rem)] border border-slate-600 border-1 rounded-xl flex flex-col items-center justify-center p-8">
          <FaSearch size={80}/>
          <h3 className='text-2xl text-semibold'>Show up in searches</h3>
          <p>
            Boost your online visibility with SEO-optimized architecture built straight into your code.
          </p>
        </div>
        <div className="w-full md:basis-[calc(33.333%-1rem)] border-slate-600 border-1 rounded-xl flex flex-col items-center justify-center p-8">
          <FaMousePointer size={80}/>
          <h3 className='text-2xl text-semibold'>Engage your audience</h3>
          <p>
            Deliver flawless, lightning-fast user experiences that keep visitors hooked on any device.
          </p>
        </div>
        <div className="w-full md:basis-[calc(33.333%-1rem)] border border-slate-600 border-1 rounded-xl flex flex-col items-center justify-center p-8">
          <FaChartBar size={80}/>
          <h3 className='text-2xl text-semibold'>Convert clicks to customers</h3>
          <p>
            Turn traffic into measurable revenue with seamless checkout flows and data-driven UX.
          </p>
        </div>
        <div className="w-full md:basis-[calc(33.333%-1rem)] border border-slate-600 border-1 rounded-xl flex flex-col items-center justify-center p-8">
          <FaMobile size={80}/>
          <h3 className='text-2xl text-semibold'>Go mobile first</h3>
          <p>
            Launch native or cross-platform iOS and Android apps built for performance and high user retention.
          </p>
        </div>
        <div className="w-full md:basis-[calc(33.333%-1rem)] border border-slate-600 border-1 rounded-xl flex flex-col items-center justify-center p-8">
          <FaLaptop size={80}/>
          <h3 className='text-2xl text-semibold'>Dominate the desktop</h3>
          <p>
            Build robust, high-performance Windows and macOS desktop applications for complex professional workflows.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home;