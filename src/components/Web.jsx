import { FaCode, FaCodeBranch, FaDatabase, FaGlobe, FaShoppingCart } from "react-icons/fa";
import image from "../assets/images/laptop.jpg";
import { BrainCircuit } from "lucide-react";
import busImage from "../assets/images/business_woman.jpg";

const Web = () => {
  return (
    <div className="min-h-dvh w-full p-16
      justify-center text-slate-800">
        <div className="flex shadow-2xl">
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center
            text-center p-8 md:p-20 gap-8 bg-white rounded-2xl
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

        <div className="w-full py-8 md:p-16">
          <h2 className="text-3xl font-semibold text-center">Types Of Web Applications We Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:px-16 py-4">
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

        <div className="w-full bg-slate-600 rounded-xl text-white p-8">
          <h2 className="text-center text-3xl font-semibold">Why Do You Need A Web Application?</h2>
          <p className='text-center py-4'>
            In today’s fast-paced digital economy, static websites are no longer enough to keep you competitive. 
            If your business relies on messy spreadsheets, manual email back-and-forths, or disconnected systems, 
            you are losing valuable time and revenue.
          </p>
          <p className='text-center py-4'>
             custom web application turns your website from a digital brochure into a powerful, automated business 
             engine. Accessible from any device with an internet connection, a web app automates your workflows, 
             engages your users, and scales your business without adding massive overhead.
          </p>

          <h3 className="text-2xl font-semibold text-center pt-4">5 Ways a Web Application Accelerates Your Growth</h3>
          <p className="py-4">
            <b>1) Streamlined Business Automation: </b>
            Say goodbye to human error and repetitive tasks. A web app can automate your internal operations—like customer onboarding, 
            invoicing, inventory tracking, or scheduling—saving your team hours of manual work every single day.
          </p>
          <p className="py-4">
            <b>2) Flawless Access on Any Device: </b>
            Unlike traditional software that requires tedious installations, web apps run directly inside any internet browser. Your 
            team and your customers can securely access your platform from a laptop, tablet, or smartphone, anywhere in the world.
          </p>
          <p className="py-4">
            <b>3) Seamless Scalability for Growing Companies: </b>
            Off-the-shelf software often traps you with expensive per-user licensing fees or rigid features that don't fit your workflow. 
            A custom web application is built entirely around your business goals, growing and evolving organically alongside your customer base.
          </p>
          <p className="py-4">
            <b>4) Centralised Data & Real-Time Insights: </b>
            Stop digging through endless folders or disjointed apps to find critical data. Web apps bring all of your business data together into a single, 
            secure dashboard, giving you instant insights to make smarter, faster business decisions.
          </p>
          <p className="py-4">
            <b>5) Easy Third-Party Integrations: </b>
            A custom web app acts as the ultimate digital bridge. It can effortlessly connect to the tools you already love—like your accounting software, payment gateways, 
            CRM systems, or cutting-edge AI tools.
          </p>
        </div>

        <div className="w-full mt-16 rounded-2xl shadow-2xl flex flex-col md:flex-row">
          <img src={busImage} className="w-full md:w-1/2 object-cover rounded-tl-2xl rounded-tr-2xl md:rounded-tl-2xl md:rounded-bl-2xl"/>
          <div className="md:w-1/2 p-8 flex flex-col items-center justify-center">
             <h3 className="text-2xl font-semibold text-center">Is Your Business Ready for a Web App?</h3>
             <p className="py-4">
              <b>If you resonate with any of the following scenarios, it’s time to upgrade your tech stack:</b>
             </p>
             <ul className="text-slate-600 py-4 list-disc list-inside">
              <li className="py-4">You’ve outgrown Microsoft Excel or Google Sheets for managing your operations.</li>
              <li className="py-4">Your team spends hours manually copying data from one system to another.</li>
              <li className="py-4">You want to launch a unique online service, SaaS platform, or customer portal but cannot find an existing software that fits your exact concept.</li>
              <li className="py-4">You need to give remote employees or external clients secure, real-time access to specific company data.</li>
             </ul>

             <h4 className="text-center text-2xl">Ready to build your digital engine?</h4>
             <p className="py-4 text-center">
              Don't let outdated workflows hold your business back. Let’s build a fast, secure, and intelligent web application designed specifically to scale your operations.
             </p>
          </div>
        </div>

        <div className="w-full p-8">
          <h2 className="text-center text-3xl font-semibold">What If You Only Need A Static Website?</h2>
          <p className='text-slate-600 text-center py-4'>
            Not every business needs a complex, data-driven application right out of the gate. If your primary goals 
            are to establish a professional online presence, build brand credibility, and give potential clients a clean 
            way to find your services and contact details, a high-performance static website is the perfect, cost-effective choice.
          </p>
          <p className='text-slate-600 text-2xl pt-4'>
            A modern static site is ideal for:
          </p>
          <ul className="text-slate-600 py-4 pl-8">
            <li className="py-2"><b>Digital Brochures & Portfolios: </b>Showcasing your services, past projects, or case studies.</li>
            <li className="py-2"><b>Landing Pages: </b>Launching focused marketing campaigns to capture leads or promote a single product.</li>
            <li className="py-2"><b>Informational Hubs </b>Sharing business hours, locations, and frequently asked questions.</li>
          </ul>
          <p className='text-slate-600 text-center py-4'><b>The Abacus Advantage: </b>Even for simpler static sites, we don’t use generic, bloated templates. We build lightning-fast, 
          secure, and fully responsive sites from scratch, completely optimized for SEO so your business stands out on Google from day one. 
          And when your business expands, we can easily upgrade your static site into a fully functional web app.
          </p>
        </div>
    </div>
  )
}

export default Web;