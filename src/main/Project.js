import React from 'react'
import FooterSec from '../footer/FooterSec'
import p1 from '../asset/p1.jpeg'
import p2 from '../asset/p2.jpeg'
import p3 from '../asset/p3.jpeg'
const Project = () => {
  return (
    <>
        <div className='w-full h-full'>
              <div className='flex justify-center items-center'><p className='text-3xl sm:text-6xl font-bold'>Projects</p></div>
              <div className='grid grid-cols-1 justify-items-center gap-10 mt-10'>
                    <div className=' sm:w-[700px] w-full flex items-center justify-center flex-col'><img src={p1} alt="" className='sm:w-[800px] w-[300px] sm:h-[400px] h-[200px]' />
                    <p className='text-center font-semibold sm:text-[20px] text-[16px]'>Securaa - A Smart Device Security Web Application</p>
                    <p className='text-orange-600 text-center'><a href="https://github.com/ms-arjun/securaa">click here to see</a></p>
                    </div>
                    <div className=' sm:w-[700px] w-full flex items-center justify-center flex-col'><img src={p2} alt="" className='sm:w-[800px] w-[300px] sm:h-[400px] h-[200px]' />
                    <p className='text-center font-semibold sm:text-[20px] text-[16px]'>Partly - A Bike Parts Selling Website</p>
                    <p className='text-orange-600 text-center'><a href="https://github.com/ms-arjun/partly">click here to see</a></p>
                    </div>
                    <div className=' sm:w-[700px] w-full flex items-center justify-center flex-col'><img src={p3} alt="" className='sm:w-[800px] w-[300px] sm:h-[400px] h-[200px]' />
                    <p className='text-center font-semibold sm:text-[20px] text-[16px]'>Luxury.in - A E-commerce Website</p>
                    <p className='text-orange-600 text-center'><a href="https://github.com/ms-arjun/luxury-watches">click here to see</a></p>
                    </div>
              </div>

        </div>
        <div className='mt-[100px]'>
        <FooterSec />
        </div>
    </>
  )
}

export default Project