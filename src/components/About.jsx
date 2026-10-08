import { FaAsterisk } from "react-icons/fa"


const About = () => {
  return (
    <div className="w-full min-h-dvh">
        <div className="w-full text-slate-600 text-center p-16">
          <h1 className="text-center text-slate-900 text-5xl font-bold">Who Are We?</h1>
          <p className="py-4">
            Abacus Technologies is a Centurion-based software development company 
            built to help startups and mid-sized businesses scale through smart, modern 
            technology. We design and build high-performing digital products that turn ambitious 
            ideas into market-leading realities.
          </p>

          <h2 className="text-3xl font-semibold pt-4">Our Creed - "Simply Innovate"</h2>
          <p className="py-4">
            The abacus was the world’s very first calculator—a symbol of simplicity, logic, and precision. 
            We bring that same philosophy to modern tech. We strip away the confusing jargon and over-engineering 
            to deliver clean, powerful software that drives actual growth for your business.
          </p>

          <h2 className="text-3xl font-semibold py-4">Why Scale With Us?</h2>
          <div className='w-full text-slate-600 grid grid-cols-1 md:grid-cols-3 gap-4 py-4'>
            <div className="w-full md:basis-[calc(33.333%-1rem)] border border-slate-600 border-1 rounded-xl flex flex-col items-center justify-center p-8">
              <FaAsterisk size={80}/>
              <h3 className='text-2xl text-semibold'>20+ Years of Engineering Excellence</h3>
              <p>
                Our team brings over two decades of deep software engineering experience to the table. We’ve 
                navigated multiple tech revolutions, meaning your product is backed by time-tested expertise 
                and stable architecture.
              </p>
            </div>

            <div className="w-full md:basis-[calc(33.333%-1rem)] border border-slate-600 border-1 rounded-xl flex flex-col items-center justify-center p-8">
              <FaAsterisk size={80}/>
              <h3 className='text-2xl text-semibold'>Built for Agile Businesses</h3>
              <p>
                We specialize in helping growing companies and fast-moving startups. We understand that you 
                need to be agile, cost-effective, and fast to market, and we build our development cycles around your business goals.
              </p>
            </div>

            <div className="w-full md:basis-[calc(33.333%-1rem)] border border-slate-600 border-1 rounded-xl flex flex-col items-center justify-center p-8">
              <FaAsterisk size={80}/>
              <h3 className='text-2xl text-semibold'>Proudly Local, Globally Minded</h3>
              <p>
                Rooted in the tech hub of Centurion, South Africa, we love collaborating closely with local innovators while building world-class 
                software capable of competing on the global stage.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full bg-slate-300 text-center p-16 text-slate-800">
          <h2 className="text-3xl font-semibold">Our Tech Specialties</h2>

          <div className='w-full text-slate-600 grid grid-cols-1 md:grid-cols-3 gap-4 py-4'>
            <div className="w-full md:basis-[calc(33.333%-1rem)] bg-slate-600 rounded-xl flex flex-col items-center justify-center p-8 text-white text-center">
              <h3 className="text-2xl font-semibold pb-4">Web Application Development</h3>
              <p>
                Beautiful, responsive, and secure web platforms engineered to handle your growing user base without breaking a sweat.
              </p>
            </div>

            <div className="w-full md:basis-[calc(33.333%-1rem)] bg-slate-600 rounded-xl flex flex-col items-center justify-center p-8 text-white text-center">
              <h3 className="text-2xl font-semibold pb-4">Mobile Applications</h3>
              <p>
                Native and cross-platform iOS and Android apps designed with intuitive user experiences that keep your customers coming back.
              </p>
            </div>

            <div className="w-full md:basis-[calc(33.333%-1rem)]  bg-slate-600 rounded-xl flex flex-col items-center justify-center p-8 text-white text-center">
              <h3 className="text-2xl font-semibold pb-4">AI Tools Integration</h3>
              <p>
                We don't just build basic apps—we inject them with intelligence. From smart automation and predictive analytics to generative AI 
                features, we help you leverage next-gen tech to outpace your competition.
              </p>
            </div>

            <div className="w-full md:basis-[calc(33.333%-1rem)]  bg-slate-600 rounded-xl flex flex-col items-center justify-center p-8 text-white text-center">
              <h3 className="text-2xl font-semibold pb-4">Search Engine Optimization (SEO)</h3>
              <p>
                Building great software is only half the battle. We optimize your web platforms from the ground up for maximum visibility, faster loading speeds, and 
                higher rankings on search engines so customers can easily find you.
              </p>
            </div>

            <div className="w-full md:basis-[calc(33.333%-1rem)]  bg-slate-600 rounded-xl flex flex-col items-center justify-center p-8 text-white text-center">
              <h3 className="text-2xl font-semibold pb-4">Desktop Applications</h3>
              <p>
                High-performance, secure, and standalone desktop software built specifically for Windows, macOS, or Linux operating systems to handle intensive business workflows.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-semibold pt-8">Your Growth Partner</h2>
          <p className="py-4">
            We don’t just view ourselves as a vendor; we operate as an extension of your team. Whether you are a startup launching your very first MVP or a mid-sized 
            business looking to modernize your systems, we provide the seasoned engineering power you need to succeed.
          </p>
          <p>
            Let’s build something incredible together.
          </p>
        </div>
    </div>
  )
}

export default About