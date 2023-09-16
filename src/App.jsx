import React, { useState } from 'react'
import illustration from './assets/images/illustration-dashboard.png'
import logo from './assets/images/logo.svg'
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram } from 'react-icons/ti'

function App() {
  
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  // const [width, setWidth] = useState('')
  // const mobile = useMemo(() => width <= 768, [width]);
  // const mobile = width <= 768; // calculated on every re-render (which is essentially on every state change)

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWidth(window.innerWidth)
  //   }
  //   window.addEventListener('resize', handleResize)

  //   // cleanup on component unmount --- uses a callback fn in return statement
  //   return () => {
  //     window.removeEventListener('resize', handleResize)
  //   }
  // }, [])

  // console.log({ mobile })
  const mobile = false
  const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const validateEmail = () => {
    if (!email.match(validEmail)) setError(true)
  }

  return (
   <div className="flex flex-col items-center p-8 gap-8 pt-10 pb-4 font-Family">
    {/* header */}
    <div className="flex flex-col items-center gap-3 w-full">
      <span className="my-4 flex items-center justify-center"><img src={logo} alt="" className="h-4 md:h-5" /></span>
      <span className="text-2xl md:text-4xl text-Gray text-center">We are launching <span className="font-bold text-VeryDarkBlue">soon!</span></span>
      <span className="text-VeryDarkBlue text-sm md:text-md">Subscribe and get notified</span>
      <div className="flex flex-col md:flex-row gap-4 text-sm items-center justify-center mt-4 w-full">
        <div className="flex flex-col gap-2 relative md:max-w-[300px] w-full">
          <input
            type="text"
            placeholder='Your email address...'
            className={`border ${error ? 'border-LightRed' : 'border-slate-200'} p-2 px-4 rounded-3xl w-full focus:outline-none
            focus:border-slate-300`}
            onChange={(e) => {setError(false); setEmail(e.target.value)}}
          />
          {error && <span className="md:absolute top-12 left-12 italic text-xs text-LightRed text-center">Please provide a valid email</span>}
        </div>
        <span className="bg-Blue shadow-md p-2 px-10 rounded-3xl text-white transition-colors shadow-PaleBlue
          hover:bg-PaleBlue cursor-pointer text-center w-full md:w-auto" onClick={validateEmail}>Notify Me</span>
      </div>
    </div>
    {/* image (body) */}
    <div className="flex md:max-w-[500px] mt-8">
      <img src={illustration} alt="" />
    </div>
    {/* footer */}
    <div className={`flex flex-col items-center text-sm mt-8 ${mobile && 'fixed bottom-2'}`}>
      <div className="flex gap-2 mb-8">
        <span className="border border-slate-200 hover:border-transparent transition-colors hover:bg-Blue group
          rounded-full p-1 cursor-pointer">
          <TiSocialFacebook className="text-Blue transition-colors group-hover:text-white" />
          </span>
        <span className="border border-slate-200 hover:border-transparent transition-colors hover:bg-Blue group
          rounded-full p-1 cursor-pointer">
          <TiSocialTwitter className="text-Blue transition-colors group-hover:text-white" />
          </span>
        <span className="border border-slate-200 hover:border-transparent transition-colors hover:bg-Blue group
          rounded-full p-1 cursor-pointer">
          <TiSocialInstagram className="text-Blue transition-colors group-hover:text-white" />
          </span>
      </div>
      <span className="text-xs text-gray text-center">&copy; Copyright Ping. All rights reserved.</span>
      <footer className="p-2 text-gray text-xs">
        <p className='text-center'>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer" className="text-slate-500">Frontend Mentor</a>. 
          Coded by <a href="#" className="text-slate-500">Scaarif Ngache</a>.
        </p>
      </footer>
    </div>
   </div>
  )
}

export default App
