
import Logo from './../../media/image/umap-logo.png'
// import Download from './../../media/image/hehe.jpg'
import {  Link } from "react-router-dom";
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
const Navbar = () => {

    const navigate = useNavigate()
    const [active,setactive] = useState(false)
  return (
    <div className='fixed top-0 z-40 flex justify-around w-full mt-4   '>

        <img src={Logo } className=" h-14 object-contain cursor-pointer animate__animated animate__fadeInLeft " alt="suki-logo" onClick={()=>{
          navigate('/suki')
        }} />

        <ul className='flex items-center gap-4 '>
            <li className='px-6 py-3 rounded-lg cursor-pointer hover:bg-slate-100' onClick={()=>{

                setactive(!active)
                navigate('/suki')
            }} >{active? "Sign Up": "Sign In"} </li>
            <li> <button className=' text-base hover:bg-yellow-500 active:bg-yellow-300 text-white px-6 rounded-lg py-3 bg-[#FDB417]'>Download App</button> </li>
        </ul>
    </div>
  )
}

export default Navbar