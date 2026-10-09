import { FaChartBar, FaClock, FaCloud, FaCog, FaMobile, FaWrench } from "react-icons/fa";
import phone from "../assets/images/phone_screen.jpg";
import { MdSpeed } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { AiOutlineRobot } from "react-icons/ai";

const Mobile = () => {
  return (
    <div className="min-h-dvh w-full p-16
      justify-center text-slate-800">
        <div className="flex shadow-2xl max-h-[70vh]">
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center
            text-center p-8 md:p-20 gap-8 bg-white rounded-2xl
            xl:rounded-tr-none xl:rounded-br-none ">
            <h1 className="text-5xl font-bold">One Codebase. Every Device. Infinite Potential.</h1>
            <FaMobile size={80}/>
            <p>
              Abacus Technologies engineers lightning-fast, cross-platform mobile apps that launch 
              twice as fast and perform like native on both iOS and Android.
            </p>
          </div>

          <img src={phone} className="w-1/2 object-cover xl:rounded-tr-2xl
                                xl:rounded-br-2xl xl:block hidden"/>
        </div>

        <div className="w-full py-8 md:p-16">
           <h2 className="text-3xl font-semibold text-center">Why Choose Cross-Platform?</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:px-16 py-4">
            <div className="w-full md:basis-[calc(33.333%-1rem)] border border-slate-600 border-1 rounded-xl flex flex-col items-center justify-center p-8">
              <FaClock size={50}/>
              <h3 className="text-2xl font-semibold">Cut Development Time in Half</h3>
              <p>
                Write once and deploy simultaneously to iOS and Android without maintaining two separate engineering teams.
              </p>
            </div>
            <div className="w-full md:basis-[calc(33.333%-1rem)] border border-slate-600 border-1 rounded-xl flex flex-col items-center justify-center p-8">
              <MdSpeed size={50}/>
              <h3 className="text-2xl font-semibold">Native-Grade Performance</h3>
              <p>
                Experience smooth animations, responsive touch gestures, and deep hardware integration.
              </p>
            </div>
            <div className="w-full md:basis-[calc(33.333%-1rem)] border border-slate-600 border-1 rounded-xl flex flex-col items-center justify-center p-8">
              <FaWrench size={50}/>
              <h3 className="text-2xl font-semibold">Simplified Maintenance</h3>
              <p>
                Push updates, fix bugs, and scale features across all platforms instantly from a unified core.
              </p>
            </div>
            <div className="w-full md:basis-[calc(33.333%-1rem)] border border-slate-600 border-1 rounded-xl flex flex-col items-center justify-center p-8">
              <FaChartBar size={50}/>
              <h3 className="text-2xl font-semibold">Cost-Effective Scaling</h3>
              <p>
                Maximize your budget by investing in a high-impact product that reaches every user from day one.
              </p>
            </div>
           </div>

           <div className="w-full bg-slate-600 rounded-xl text-white p-8 text-center">
            <h2 className="text-center text-3xl font-semibold">Our Core Services</h2>
            <div className="flex flex-col items-center justify-center p-4 bg-slate-500 rounded-l mt-4">
              <FaCode size={50}/>
              <h3 className="text-2xl font-semibold">End-to-End Mobile App Development</h3>
              <p>
                From initial wireframes and UI/UX design to store submission and post-launch support.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-slate-500 rounded-l mt-4">
              <FaCog size={50}/>
              <h3 className="text-2xl font-semibold">Cross-Platform Engineering</h3>
              <p>
                Custom apps built with modern frameworks to ensure seamless operation on phones, tablets, and wearables.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-slate-500 rounded-l mt-4">
              <FaCloud size={50}/>
              <h3 className="text-2xl font-semibold">Backend & Cloud Integration</h3>
              <p>
                Secure APIs, real-time databases, user authentication, and third-party service connections.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-slate-500 rounded-l mt-4">
              <AiOutlineRobot size={50}/>
              <h3 className="text-2xl font-semibold">AI & Next-Gen Feature Integration</h3>
              <p>
                Infuse your app with smart automation, conversational AI, and modern digital workflows.
              </p>
            </div>
           </div>
        </div>

        <div className="w-full p-8">
          <h2 className="text-center text-3xl font-semibold">How We Work</h2>
          <p className='text-center py-4'>
            <b>Discover & Define: </b>
            We map out your business goals, user personas, and technical requirements.
          </p>

          <p className='text-center py-4'>
            <b>Design & Prototype: </b>
            We craft intuitive, brand-aligned interfaces and interactive prototypes you can test early.
          </p>

          <p className='text-center py-4'>
            <b>Build & Iterate: </b>
            Our team writes clean, scalable cross-platform code with regular milestone reviews.
          </p>

          <p className='text-center py-4'>
            <b>Launch & Support: </b>
              We handle store deployment, performance monitoring, and ongoing feature updates.
          </p>
        </div>
        <div className="bg-sky-400 rounded-2xl text-white p-8 flex flex-col items-center justify-around">
          <h1 className="text-3xl font-semibold">Let’s turn your vision into a cross-platform reality.</h1>
          <h2 className="text-2xl font-semibold"> Partner with Abacus Technologies to launch your mobile app faster and smarter.</h2>
          <a href="https://wa.me/27619941652" className="py-2 px-4 bg-red-600 mt-4 rounded-md hover:bg-red-700">Start Your Project Today</a>
        </div>
    </div>
  )
}

export default Mobile;