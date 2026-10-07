import bgImage from '../assets/images/office.jpg';
import { FaCode, FaBusinessTime } from 'react-icons/fa';
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
              <a className='bg-sky-500 py-2 px-4 text-white rounded-md hover:bg-sky-600 transition-all'
                href="https://wa.me/27619941652"
              >
                Get In Touch
              </a>
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
    </div>
  )
}

export default Home;