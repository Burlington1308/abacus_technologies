

const Contact = () => {
  return (
    <div className="w-full min-h-dvh flex flex-col items-center justify-center p-16">
      <div className="shadow w-3/4 min-h-[50vh] bg-sky-400 p-8 flex flex-col items-center justify-around rounded-2xl">
        <h1 className="text-3xl text-slate-700 font-bold">Hey there!</h1>
        <h2 className="text-3xl text-slate-700 font-bold">We would love to hear from you</h2>
        <a href="#footer_contact" className="bg-slate-900 py-2 px-4 rounded-md text-sky-200 hover:bg-slate-800 hover:text-white">Get In Touch!</a>
      </div>
    </div>
  )
}

export default Contact;