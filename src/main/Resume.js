import React from 'react'
import FooterSec from '../footer/FooterSec'

const Resume = () => {
  return (
    <>
      <div className='w-full h-full'>
        <div className='text-3xl sm:text-4xl font-bold sm:ml-5 text-center sm:text-left'><p>Resume</p></div>
            <div className='grid grid-cols-1 sm:grid-cols-2 sm:ml-10 ml-5 mt-10'>
                <div>
                    <p className='sm:text-2xl text-xl font-bold'>Education</p>
                    <div className='ml-8'>
                        <p>M.Sc - Computer Science</p>
                        <p>Karpagam Academy Of Higher Education
                             <br />   2022-2024 (80%) </p>
                    </div>
                    <div className='ml-8'>
                        <p>B.Sc - Computer Technology</p>
                        <p>Karpagam Academy Of Higher Education
                             <br />   2017-2018 (88%) </p>
                    </div>
                    <div className='ml-8'>
                        <p>HSC</p>
                        <p>Vasavi Vidyalaya Matric Higher Secondary School
                             <br />   2022-2024 (74%) </p>
                    </div>
                    <div className='ml-8'>
                        <p>SSLC </p>
                        <p>Vasavi Vidyalaya Matric Higher Secondary School
                             <br />   2015-2016 (84%) </p>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col'>
                        <div> 
                            <p className='sm:text-2xl text-xl font-bold sm:ml-10'>Skills</p>
                            <div>
                                <ul className='list-disc ml-12 sm:ml-24'>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>TailwindCSS</li>
                                    <li>JavaScript</li>
                                    <li>ReactJs</li>
                                    <li>Git</li>
                                </ul>
                            </div>
                        </div>
                        <div className='w-full'>
                            <p className='sm:text-2xl text-xl font-bold sm:ml-10 sm:mt-10'>Work Experience</p>
                            <p className='ml-8 sm:ml-20'>Front End Developer (3 - Months) - Blackwins Tech Solution 
                                <span> - INTERNSHIP</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className='mt-[110px]'>
        <FooterSec />
        </div>
    </>
  )
}

export default Resume