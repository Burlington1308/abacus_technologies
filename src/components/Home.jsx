import bgImage from '../assets/images/office.jpg';

const Home = () => {
  return (
    <div className="h-screen w-full">
      <div className=" h-dvh w-full bg-cover bg-center relative"
        style={{backgroundImage: `url(${bgImage})`}}
      >
        <div className='h-dvh w-full bg-black/70 absolute inset-0 flex flex-col items-center justify-center'>
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
    </div>
  )
}

export default Home;