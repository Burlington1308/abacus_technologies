import { FaAd, FaChartBar, FaSearch } from "react-icons/fa";
import analysis from "../assets/images/analysis.jpg";
import { FaShop } from "react-icons/fa6";


const SEO = () => {
  return (
    <div className="min-h-dvh w-full p-16
          justify-center text-slate-800">
      <div className="flex shadow-2xl max-h-[70vh] rounded-2xl">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center
            text-center p-8 md:p-20 gap-8 bg-white rounded-2xl
            xl:rounded-tr-none xl:rounded-br-none ">
          <h1 className="text-3xl font-bold">Dominate Search Results with Expert SEO Services</h1>
          <FaChartBar size={80}/>
          <p>
            If your business isn't on the first page of Google, you are losing leads to your competitors every 
            day. At Abacus Technologies, we don't just focus on driving random traffic—we optimize your website to attract high-intent visitors who are actively looking for your products and services.
          </p>
          <p>
            Through tailored SEO strategies, we help you build sustainable, long-term organic growth 
            that keeps working for your business around the clock.
          </p>  
        </div>

        <img src={analysis} className="w-1/2 object-cover xl:rounded-tr-2xl
                                        xl:rounded-br-2xl xl:block hidden"/>
      </div>

      <div className="w-full py-8 md:p-16">
        <h2 className="text-3xl font-semibold text-center">Our Core Search Marketing Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:px-16 py-4">
          <div className="w-full md:basis-[calc(33.333%-1rem)] border border-slate-600 border-1 rounded-xl flex flex-col items-center justify-center p-8">
            <FaSearch size={50}/>
            <h3 className="text-2xl font-semibold">Search Engine Optimization (SEO)</h3>
            <p>
              We optimize your website’s structure, fix technical issues, write high-value content, and build authority so search engines rank you higher.
            </p>
          </div>

          <div className="w-full md:basis-[calc(33.333%-1rem)] border border-slate-600 border-1 rounded-xl flex flex-col items-center justify-center p-8">
            <FaAd size={50}/>
            <h3 className="text-2xl font-semibold">Google Ads Management</h3>
            <p>
              Need immediate leads? Our team builds and manages high-ROI Pay-Per-Click (PPC) campaigns that put you at the top of search results instantly.
            </p>
          </div>

          <div className="w-full md:basis-[calc(33.333%-1rem)] border border-slate-600 border-1 rounded-xl flex flex-col items-center justify-center p-8">
            <FaShop size={50}/>
            <h3 className="text-2xl font-semibold">Google Business Profile Management</h3>
            <p>
              We claim, optimize, and manage your local listing to ensure you dominate map packs and capture local phone calls and reviews.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-slate-600 rounded-xl text-white p-8 text-center">
        <h2 className="text-center text-3xl font-semibold">How Our SEO Process Works</h2>
        <p className="py-4">
          We take the guesswork out of rankings. Our proven framework ensures every dollar you spend is backed by data.
        </p>

        <div className="flex flex-col items-center justify-center p-4 bg-slate-500 rounded-l mt-4">
          <h3 className="text-2xl font-semibold">In-Depth SEO Audit</h3>
          <p>
            We analyze your website's technical health, user experience, and current rankings to find hidden opportunities.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center p-4 bg-slate-500 rounded-l mt-4">
          <h3 className="text-2xl font-semibold">Keyword Research & Strategy</h3>
          <p>
            We uncover the exact terms your target audience is typing into Google and map out a content plan to target them.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center p-4 bg-slate-500 rounded-l mt-4">
          <h3 className="text-2xl font-semibold">On-Page & Technical Optimization</h3>
          <p>
            We fix slow loading speeds, optimize your meta tags, and structure your content so both users and search bots love it.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center p-4 bg-slate-500 rounded-l mt-4">
          <h3 className="text-2xl font-semibold">Authority Building</h3>
          <p>
            We use ethical link-building strategies to increase your website's credibility and push your rankings higher.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center p-4 bg-slate-500 rounded-l mt-4">
          <h3 className="text-2xl font-semibold">Transparent Reporting</h3>
          <p>
            You will receive clear, easy-to-read monthly reports tracking your keyword progress, traffic increases, and conversions.
          </p>
        </div>
      </div>

      <div className="w-full p-8">
        <h2 className="text-center text-3xl font-semibold">Why Choose Abacus Technologies?</h2>

        <p className='text-center py-4'>
          <b>Data-First Approach: </b>
          Like our name implies, we rely on hard numbers, analytics, and ROI—not guesswork.
        </p>

        <p className='text-center py-4'>
          <b>Full-Funnel Expertise: </b>
          By seamlessly blending SEO with Google Ads and local search, we capture your audience at every stage of their buying journey.
        </p>

        <p className='text-center py-4'>
          <b>Dedicated Support: </b>
          You get a partner, not just a vendor. We stay aligned with your business goals as you scale.
        </p>
      </div>

      <div className="bg-sky-400 rounded-2xl text-white p-8 flex flex-col items-center justify-around">
        <h1 className="text-3xl font-semibold">Ready to Grow Your Digital Footprint?</h1>
        <h2 className="text-2xl font-semibold text-center">Stop letting your competitors take your spot on Google. Let the experts at Abacus Technologies build an SEO strategy that drives real business growth.</h2>
        <a href="https://wa.me/27619941652" className="py-2 px-4 bg-red-600 mt-4 rounded-md hover:bg-red-700">Get Free Consult</a>
      </div>
    </div>
  )
}

export default SEO;