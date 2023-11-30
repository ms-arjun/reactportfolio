import React from 'react'
import FooterSec from '../footer/FooterSec'
import { useState } from 'react';

const Contact = () => {

   

    const [formData, setFormData] = useState({
        fname:"",
        lname:"",
        email:"",
        subject:"",
        message:""
                 })

    const [error, setError] = useState({})


    const handleChange = (e)=>{
        const {name,value} = e.target
        setFormData({
          ...formData, [name] : value
        })
    }
    const handleClick = (e) =>{
        e.preventDefault()
        const validation = {}
        if(!formData.fname){
            validation.fname = "please fill"
        }
        if(!formData.lname){
            validation.lname = "please fill"
        }
        if(!formData.email){
            validation.email = "please fill"
        }
        if(!formData.subject){
            validation.subject = "please fill"
        }
        if(!formData.message){
            validation.message = "please fill"

        }
        setError(validation)

        if(Object.keys(validation).length === 0){
            alert("Form Submitted Successfully")
        }
        setFormData( " ")
        // console.log(formData.fname)

    }
 
 
  return (
    <>
        <div className=' w-full h-full grid sm:grid-cols-2  grid-cols-1 '>
            <div className='ml-3 sm:ml-10 mt-5'>
                <p className='sm:text-6xl text-3xl font-bold'>Contact</p>
                <p className='sm:text-3xl text-xl font-bold mt-5 sm:mt-10'>Phone : <span className='sm:text-2xl text-[16px] font-semibold'> 8838853930 </span></p>
                <p className='sm:text-3xl text-xl font-bold '>Email :<span className='sm:text-2xl text-[16px] font-semibold'>  arjunmurugesan11@gmail.com </span></p>
            </div>
            <div className='mt-10 sm:mt-0'>
                <div>
                    <form onSubmit={handleClick} action="https://formsubmit.co/9aeb759fe6ff3320568bab430f081543" method='post' >
                        <div className='grid grid-rows-2 sm:grid-cols-2 sm:gap-10 gap-4 font-semibold items-center justify-center'>
                            <div  >
                                <label htmlFor="">First Name</label> <br />
                                <input type="text" className= {(error.fname) ? 'sm:p-3 p-1 w-full sm:w-[250px] border-2 border-red-300' 
                                : 'sm:p-3 p-1 w-full sm:w-[250px] border border-black'}
                                name = "fname" onChange={handleChange}
                                  
                                />
                                {error.fname && <div className='text-red-700'>{error.fname}</div> }
                                </div>
                            <div>
                                <label htmlFor="">Last Name</label> <br />
                                <input type="text" className= {(error.lname) ? 'sm:p-3 p-1 w-full sm:w-[250px] border-2 border-red-300' 
                                : 'sm:p-3 p-1 w-full sm:w-[250px] border border-black'}
                                name = "lname" onChange={handleChange} />
                                 {error.lname && <div className='text-red-700'>{error.lname}</div>}
                                 </div>
                            <div>
                                <label htmlFor="">Email</label> <br />
                                <input type="email" className= {(error.email) ? 'sm:p-3 p-1 w-full sm:w-[250px] border-2 border-red-300' 
                                : 'sm:p-3 p-1 w-full sm:w-[250px] border border-black'}
                                name = "email" onChange={handleChange} />
                                 {error.email && <div className='text-red-700'>{error.email}</div>}
                                 </div>
                            <div>
                                <label htmlFor="">Subject</label> <br />
                                <input type="text" className= {(error.subject) ? 'sm:p-3 p-1 w-full sm:w-[250px] border-2 border-red-300'
                                 : 'sm:p-3 p-1 w-full sm:w-[250px] border border-black'}
                                 name = "subject" onChange={handleChange} />
                                 {error.subject && <div className='text-red-700'>{error.subject}</div>}
                                </div>
                            <div>
                                <label htmlFor="">Message</label> <br />
                                <textarea id="" cols="30" rows="5" className= {(error.message) ? 'sm:p-3 p-1 w-full sm:w-[250px] border-2 border-red-300'
                                 : 'sm:p-3 p-1 w-full sm:w-[250px] border border-black'}
                                name = "message" onChange={handleChange} ></textarea>
                                {error.message && <div className='text-red-700'>{error.message}</div>}
                            </div>
                            <div><button className='w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] bg-orange-400 sm:rotate-[20deg] font-bold text-[12px] sm:text-[18px]  text-white
                            relative sm:left-10 rounded-full sm:rounded-none'>Submit</button></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className='sm:mt-[100px] mt-10'>
       <FooterSec />
        </div>
    </>
  )
}

export default Contact