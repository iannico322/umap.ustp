import React, { useRef, useState } from 'react'




import Cloud1 from './../../../media/image/cloud_1.png'
import Cloud2 from './../../../media/image/cloud_2.png'
import Map from './../../../media/image/map.png'
import Sun from './../../../media/image/sun.png'
import axios from '../../../plugins/axios'
import Input from '../../../components/input/input'
import { Alert } from '@mui/material'
import UmapLogo from "./../../../media/image/umap-logo.png";
import { Link } from 'react-router-dom'
const ForgotPassword = () => {
 
  const [data,setdata] = useState({
    email:""
  })
  const [isclick,setisclick] = useState(false)
  const [alert, setAlert] = useState({
    display: false,
    type: "warning",
    text: "",
  });



  

  return (
    
    
    <div className='relative flex items-center justify-center w-screen h-screen overflow-hidden '>
      <div className="fixed top-0 z-50 flex justify-around object-contain w-full mt-4 cursor-pointer h-14 animate__animated animate__fadeInDown ">
          
          <Link to="/">
          <img
            src={UmapLogo}
            className="z-50 h-10 object-contain cursor-pointer hover:scale-[0.9] transition-transform "
            alt="umap-logo"
            onClick={() => {
            
            }}
          />
          </Link>
          

          <ul className="flex items-center gap-4 ">
            <li>
              {" "}
              <Link to="/" className=" text-base hover:bg-green-500 active:bg-green-300 text-white px-6 rounded-lg py-3 bg-yellow hover:scale-[1.07] transition-transform">
                Go to Umap
              </Link>{" "}
            </li>
          </ul>
        </div>
   
    {/* Whole Screen Container */}
    

      {/* Input Sun */}
      <form onSubmit={ async (e)=>{
        e.preventDefault()
        setisclick(true)

        await axios.post('users/reset_password/',data).then(()=>{
          setAlert({
            display: true,
            type: "success",
            text: "We sent an something on your gmail, please  check it!",
          });

          setisclick(true)

        })



        setTimeout(() => {
          setAlert({
            display: false,
            type: "success",
            text: "",
          });
        }, 4000);

        setTimeout(() => {
          setisclick(false)
        }, 6000);

      }} className='z-20 w-[30%] min-w-[400px] min-h-[10px] flex flex-col mt-16 px-12 py-8 gap-10 pb-20 rounded-3xl absolute border-[1px] border-[#4b4b4b33] bg-[#D9D9D9] backdrop-blur-lg bg-opacity-25'>
        
        <p className='font-[inter] text-[40px] text-[#493636] font-[500]'>Forgot Password</p>

        <div className='flex flex-col'>
          <Input
            label="Email"
            type="email"
            value={data.email}
            onChange={(event) => {
              setdata({ ...data, email: event.target.value });
            }}
          />
          
        </div>   

        <button 
 
          className='px-10 py-2 text-white rounded-md bg-gray hover:bg-opacity-90 '>
           
           
           {isclick? "Sent to Gmail" :"Send"}
        </button> 
        <div className={alert.display ? "block animate-pulse" : "hidden"}>
            <Alert severity={alert.type} variant="outlined">
              {" "}
              {alert.text}
            </Alert>
          </div>
        
      </form>

      {/* Background Images */}
      <div className=" absolute flex flex-row w-full h-[60%] justify-evenly pointer-events-none">

          <div className=" w-[50%] h-[100%] flex justify-center ">

          <img
                    src={Map}
                    className="absolute z-10 object-contain w-full h-full animate-float"
                    alt=""
                  />
          </div>
          <div className="flex flex-col w-[50%] h-[100%]">
          <img
                      src={Sun}
                      className="  animate-floatSun h-[200px] w-[200px] object-fill rotate-[-5deg] translate-y-[80px] translate-x-[-100px]  "
                      alt=""
                    />
          <img
                      src={Cloud1}
                      className="   animate-floatCloud h-[50%] w-[30%] object-contain rotate-[-25deg] translate-x-[30px] translate-y-[-30px]"
                      alt=""
                    />
                    <img
                      src={Cloud2}
                      className=" animate-floatCash1 h-[90px] w-[90px] object-contain rotate-[35deg] translate-y-[-70px] translate-x-[90px] "
                      alt=""
                    />
          
          </div>

          

        </div>
    </div>

   
  )
}

export default ForgotPassword