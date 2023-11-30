import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdDensitySmall ,MdClear, MdArrowBack } from "react-icons/md";

const Nav = () => {

    const [nav,setNav] = useState(true)

    const handleNav = ()=>{
      setNav(!nav)
    }

  return (
    <>
        <div className='w-full'>
            <div className='hidden sm:flex flex-row items-end justify-end p-11 font-semibold'>
                <div className='px-6'> <Link to={'/resume'}> Resume </Link></div>
                <div className='px-6'> <Link to={'/project'}> Projects </Link> </div>
                <div className='px-6'> <Link to={'/contact'}> Contacts </Link>  </div>
                <div className='px-6'><Link to={'/'}> <MdArrowBack size={20} /> </Link></div>
            </div>
            <div onClick={() => handleNav()} className='block md:hidden mt-5 ml-5'>
              {(!nav) ?  <MdClear size={20} /> : <MdDensitySmall  size={20} />}
            </div>
            <div className={!nav ? 'fixed left-5 top-10 w-[50%] h-[290px] block md:hidden bg-white ease-in duration-300 font-semibold' : 'fixed left-[-200px] ease-in duration-300'}>
                <div className='p-6 border-b border-black'> <Link to={'/resume'}> Resume </Link></div>
                <div className='p-6 border-b border-black'> <Link to={'/project'}> Projects </Link> </div>
                <div className='p-6 border-b border-black'> <Link to={'/contact'}> Contacts </Link>  </div>
                <div className='p-6'><Link to={'/'}> Back </Link></div>
            </div>
        </div>
    </>
  )
}

export default Nav