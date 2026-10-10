import { FaDesktop, FaServer, FaCode } from "react-icons/fa";
import {MdDeveloperBoard} from "react-icons/md";
import desktop from "../assets/images/desktop.jpg";
import { MonitorCog } from "lucide-react";

const Desktop = () => {
  return (
    <div className="min-h-dvh w-full p-16
      justify-center text-slate-800">
        <div className="flex shadow-2xl md:max-h-[70vh] rounded-2xl">
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center
            text-center p-8 md:p-20 gap-8 bg-white rounded-2xl
            xl:rounded-tr-none xl:rounded-br-none ">
              <h1 className="text-5xl font-bold">Precision Desktop Software Built for Power Users</h1>
              <FaDesktop size={80}/>
              <p>
                We engineer fast, secure, and native desktop applications that turn complex workflows into smooth, 
                reliable experiences across Windows, macOS, and Linux.
              </p>
          </div>
          <img src={desktop} className="w-1/2 object-cover xl:rounded-tr-2xl
                                          xl:rounded-br-2xl xl:block hidden"/>
        </div>

        <div className="w-full py-8 md:p-16">
          <h2 className="text-3xl font-semibold text-center">Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:px-16 py-4">
            <div className="w-full md:basis-[calc(33.333%-1rem)] border border-slate-600 border-1 rounded-xl flex flex-col items-center justify-center p-8">
              <MonitorCog size={50}/>
              <h3 className="text-2xl font-semibold">Native Desktop Engineering</h3>
              <p>
                Custom-built applications tailored for Windows (Win32 / WPF / C++/DotNet/C#), macOS (Swift / AppKit), and cross-platform frameworks (Electron / Qt / Tauri) where speed matters.
              </p>
            </div>

            <div className="w-full md:basis-[calc(33.333%-1rem)] border border-slate-600 border-1 rounded-xl flex flex-col items-center justify-center p-8">
              <FaServer size={50}/>
              <h3 className="text-2xl font-semibold">System & Hardware Integration</h3>
              <p>
                Direct hooks into local file systems, USB/serial devices, local databases, and specialized enterprise hardware.
              </p>
            </div>

            <div className="w-full md:basis-[calc(33.333%-1rem)] border border-slate-600 border-1 rounded-xl flex flex-col items-center justify-center p-8">
              <FaCode size={50}/>
              <h3 className="text-2xl font-semibold">Legacy App Modernization</h3>
              <p>
                Take your aging desktop software and rebuild its engine with modern UI/UX, tighter security, and cloud-sync capabilities without losing core functionality.
              </p>
            </div>

            <div className="w-full md:basis-[calc(33.333%-1rem)] border border-slate-600 border-1 rounded-xl flex flex-col items-center justify-center p-8">
              <MdDeveloperBoard size={50}/>
              <h3 className="text-2xl font-semibold">Performance & Long-Term Support</h3>
              <p>
                Continuous profiling, memory leak fixes, automated updates, and enterprise-grade maintenance planning.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full bg-slate-600 rounded-xl text-white p-8 text-center">
          <h2 className="text-center text-3xl font-semibold"></h2>

          <p className='text-center py-4'>
            Abacus Technologies has a dedicated desktop app development team. We focus on performance-first engineering rather than heavy, bloated web wrappers.
          </p>
          <p className='text-center py-4'>
            Our mission is to give your business and your users rock-solid software that works offline, connects seamlessly with local hardware and databases, and never stutters under heavy loads.
          </p>
          <p className='text-center py-4'>
            When your team or customers need deep system integration, low latency, and zero reliance on a browser tab, native desktop power is unmatched.
          </p>
        </div>

         <div className="bg-sky-400 rounded-2xl text-white p-8 flex flex-col items-center justify-around mt-12">
          <h1 className="text-3xl font-semibold">Ready to build your desktop app?</h1>
          <h2 className="text-2xl font-semibold">Tell us about your project requirements, target operating systems, and timeline.</h2>
          <a href="https://wa.me/27619941652" className="py-2 px-4 bg-red-600 mt-4 rounded-md hover:bg-red-700">Start Your Project Today</a>
        </div>
    </div>
  )
}

export default Desktop;