import { FaCode, FaCodeBranch, FaDatabase, FaGlobe, FaShoppingCart } from "react-icons/fa";
import image from "../assets/images/laptop.jpg"
import { BrainCircuit } from "lucide-react";

const Web = () => {
  return (
    <div className="min-h-dvh w-full p-16
      justify-center text-slate-800">
        <div className="flex shadow-2xl">
          <div className="w-1/2 flex flex-col
            text-center p-20 gap-8 bg-white rounded-2xl
            xl:rounded-tr-none xl:rounded-br-none ">
              <h1 className="text-5xl font-bold">Responsive Web Applications</h1>
              <FaGlobe size={80} className="m-auto"/>
              <p>
                We build premium quality, high performance web sites and web applications
                that are search engine optimized and scalable.
              </p>
          </div>

          <img src={image} className="w-1/2 object-cover xl:rounded-tr-2xl
                      xl:rounded-br-2xl xl:block hidden"/>
        </div>

        <div className="w-full p-16">
          <h2 className="text-3xl font-semibold text-center">Types Of Web Applications We Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-16 py-4">
            <div className="w-full md:basis-[calc(33.333%-1rem)] border border-slate-600 border-1 rounded-xl flex flex-col items-center justify-center p-8">
              <FaCode size={50}/>
              <h3 className="text-2xl font-semibold">Static Website</h3>
              <p>
                Beautiful websites that focus on presentation only. These sites usually have text and images only
                 with no dynamic functionality.
              </p>
            </div>

            <div className="w-full md:basis-[calc(33.333%-1rem)] border border-slate-600 border-1 rounded-xl flex flex-col items-center justify-center p-8">
              <FaDatabase size={50}/>
              <h3 className="text-2xl font-semibold">Dynamic Website</h3>
              <p>
                Powerful web applications that are connected to a database. They're interactive, responding
                 to the actions of the user. An admin controls what is in the database and what is presented to the user 
                 based on the design.
              </p>
            </div>

            <div className="w-full md:basis-[calc(33.333%-1rem)] border border-slate-600 border-1 rounded-xl flex flex-col items-center justify-center p-8">
              <FaShoppingCart size={50}/>
              <h3 className="text-2xl font-semibold">ECommerce Website</h3>
              <p>
                Applications that allow for business transactions and sales over the internet. 
                Present your inventory, take payment in a secure manner and adjust inventroy in your database.
                You can also have third party vendors create accounts and make sales on your site.
              </p>
            </div>

            <div className="w-full md:basis-[calc(33.333%-1rem)] border border-slate-600 border-1 rounded-xl flex flex-col items-center justify-center p-8">
              <FaCodeBranch size={50}/>
              <h3 className="text-2xl font-semibold">Web API</h3>
              <p>
                We build APIs that allow your organisation to provide scaffolding for 
                front-end sites as well as mobile applications.
              </p>
            </div>

            <div className="w-full md:basis-[calc(33.333%-1rem)] border border-slate-600 border-1 rounded-xl flex flex-col items-center justify-center p-8">
              <BrainCircuit size={50}/>
              <h3 className="text-2xl font-semibold">AI Integration</h3>
              <p>
                Integrate Artificial Intelligence and AI-powered tools into your web applications. 
                From chatbots to tools that assist your clients to navigate and maximise 
                the full functionality of your web application.
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Web;