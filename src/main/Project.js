import React from 'react'
import FooterSec from '../footer/FooterSec'

const Project = () => {
  return (
    <>
        <div className='w-full h-full'>
              <div className='flex justify-center items-center'><p className='text-3xl sm:text-6xl font-bold'>Projects</p></div>
              <div className='grid grid-cols-1 justify-items-center gap-10 mt-10'>
                    <div className='border-2 border-cyan-900 sm:w-[700px] w-full'><img src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-[200px] h-[200px]' />
                    <p className='text-center'>Secuity Service WebsiteSecuity Service WebsSecuity Service WebsiteSecuity Service WebsiteiteSecuity Service WebsiteSecuity Service Website</p>
                    </div>
                    <div className='border-2 border-cyan-900 sm:w-[700px] w-full'><img src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-[200px] h-[200px]' />
                    <p className='text-center'>Bike parts Secuity Service WebsiteSecuity Service WebsiteSecuity Service Websiteselling Website</p>
                    </div>
                    <div className='border-2 border-cyan-900 sm:w-[700px] w-full'><img src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-[200px] h-[200px]' />
                    <p className='text-center'>Quote Secuity Sece WebsiteSecuity Service WebsiteSecuity Service WebsiteSecuity Service WebsiteSecuity Service WebsiteGenerator</p>
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