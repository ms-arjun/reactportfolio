import React from 'react'
import { Link } from 'react-router-dom'
import FooterSec from '../footer/FooterSec'
import profile from '../asset/arjunm.jpg'

const Hero = () => {
  return (
    <>
        <div className='w-full h-full '>
            <div className='grid sm:grid-cols-2 grid-cols-1'>
              <div className='flex justify-center items-center'>
                <img src={profile}
                 alt="profile pic" className=' w-[150px] sm:w-[400px] h-[150px] sm:h-[400px]  rounded-full' />
              </div>
              <div className='flex justify-center items-center flex-col'>
                   
                 <div>
                 <p className='text-[16px] sm:text-[20px] ml-3 sm:ml-0 md:ml-0'>
                    <span className='text-3xl sm:text-6xl font-bold'>Hello World !</span>  <br /> <br />
                    <span className='text-2xl sm:text-4xl font-bold'> I'm Arjun.</span> from coimbatore, currently  pursuing MSc Computer Science.
                    Im very much  interested in FrontEnd development,looking for a FrontEnd developer  role in a reputed organization.
                      
                    </p>
                 </div>
                   <div className='p-6 grid grid-cols-3 sm:gap-10 gap-6 mt-[30px] sm:mt-0'>
                     <div> <button className='w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] bg-orange-400 rotate-[10deg] font-bold text-[12px] sm:text-[18px]  text-white'><Link to={'/resume'}> Resume </Link></button> </div>
                     <div> <button className='w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] bg-orange-500 rotate-[20deg] font-bold text-[12px] sm:text-[18px]  text-white'><Link to={'/project'}> Projects </Link></button> </div>
                     <div> <button className='w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] bg-orange-600 rotate-[30deg] font-bold text-[12px] sm:text-[18px]  text-white'><Link to={'/contact'}> Contacts </Link></button> </div>
                   </div>
              </div>   
            </div>
        </div>
        <div>
        <div className='mt-[110px]'>
        <FooterSec />
        </div>
        </div>
    </>
  )
}

export default Hero