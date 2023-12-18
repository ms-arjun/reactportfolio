import React from 'react'
import { FaInstagramSquare,FaLinkedin, FaGitSquare} from "react-icons/fa";


const Footer = () => {
  return (
    <>
            <div className='w-full h-[100px] border-t border-black'>
            <div className='flex sm:flex-row flex-col items-center justify-evenly'> 
                <div className='text-center'>Phone
                    <div><p className='font-semibold'>8838853930</p></div>
                </div>
                <div className='text-center'>Email
                    <div><p className='font-semibold'><a href="mailto:arjunmurugesan11@gmail.com">arjunmurugesan11@gmail.com</a></p></div>
                </div>
                <div className='text-center'>Social
                    <div className='font-semibold mt-2'>
                            <ul className='flex flex-row items-center justify-center'>
                                <li className='sm:px-2'> <a href="https://www.instagram.com/arjoon24/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" target='blank'><FaInstagramSquare  size={20}/> </a></li>
                                <li className='sm:px-2'> <a href="https://github.com/ms-arjun" target='blank'> < FaGitSquare size={20}/> </a></li>
                                <li className='sm:px-2'> <a href="https://www.linkedin.com/in/arjun-murugesan-b53585250/ " target='blank'><FaLinkedin size={20}/></a></li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer