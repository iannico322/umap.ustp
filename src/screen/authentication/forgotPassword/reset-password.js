import Cloud1 from './../../../media/image/cloud_1.png'
import Cloud2 from './../../../media/image/cloud_2.png'
import Map from './../../../media/image/map.png'
import Sun from './../../../media/image/sun.png'
import axios from '../../../plugins/axios'
import Input from '../../../components/input/input'
import { Alert } from '@mui/material'
import { Link, useNavigate, useParams }  from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react'
import UmapLogo from "./../../../media/image/umap-logo.png";
const ResetPassword = () => {

  const [isclick, setclick] = useState(false);
  
 
  const key = useParams()
  const navigate = useNavigate()

  const [data, setData] = useState({
    ...key,
    new_password: "",
    re_new_password: "",
  });

  const [ok,setok]=useState(false)

  const [alert, setAlert] = useState({
    display: false,
    type: "warning",
    text: "",
  });

 
  let isItlong = false;
  let hasNumber = false;
  let isValid = false;
  const [warningpassword, setwarningpassword] = useState();
  const [warningre_password, setwarningre_password] = useState();

  useEffect(() => {
    if (data.new_password.length > 8) {
      isItlong = true;
    } else {
      isItlong = false;
    }

    if (/\d/.test(data.new_password)) {
      hasNumber = true;
    } else {
      hasNumber = false;
    }

    if (isItlong && hasNumber) {
      setwarningpassword("Great Password!");
    } else {
      setwarningpassword(
        "Invalid password it must has number and length is more than 8"
      );
    }

    if (data.new_password.length <= 1) {
      setwarningpassword("");
    }

    

  }, [data.new_password, data.re_new_password]);

  useEffect(() => {
    if (data.re_new_password == data.new_password) {
      setwarningre_password("Password Matched,Great!");
    } else {
      setwarningre_password("Password not Matched");
    }

    if (data.re_new_password.length < 1) {
      setwarningre_password("");
    }


  }, [data.new_password, data.re_new_password]);
  

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
      <form  className='  border-[1px] border-[#4b4b4b33] animate__animated animate__fadeInUp z-20 w-[30%] min-w-[400px] min-h-[10px] flex flex-col mt-16 px-12 py-8 gap-5 pb-14 rounded-3xl absolute bg-[#D9D9D9] backdrop-blur-lg bg-opacity-25'
      
      onSubmit={ async (e)=>{
        e.preventDefault()


        if (
          warningpassword == "Great Password!" &&
          data.re_new_password == data.new_password
        ) {
          isValid = true
        } else {
          isValid = false
        }

        if (isValid) {
          setAlert({
            ...alert,
            display: true,
            type: "",
            text: "",
          });
          await axios
            .post("users/reset_password_confirm/", data)
            .then(() => {
              setAlert({
                ...alert,
                display: true,
                type: "success",
                text: "Password succesfully reset!",
              });

              setData({
                ...key,
                new_password: "",
                re_new_password: "",
              })

              setTimeout(() => {
                setAlert({
                  ...alert,
                  display: false,
                  type: "warning",
                  text: "",
                });
              }, 10000);
            })
            .catch((response) => {

              try{
                setAlert({
                ...alert,
                display: true,
                type: "warning",
                text: JSON.parse(response.request.response).token[0],
              });
              }catch(e){
               
              }


              try{
                setAlert({
                ...alert,
                display: true,
                type: "warning",
                text: JSON.parse(response.request.response).new_password[0],
              });
              }catch(e){
                
              }

              setTimeout(() => {
                setAlert({
                  ...alert,
                  display: false,
                  type: "warning",
                  text: "",
                });
              }, 4000);
              

              
            });

           
             
           

      
        }else {
          setAlert({
            ...alert,
            display: true,
            type: "error",
            text: "Invalid Passwords - Make sure you made all things right",
          });
          setTimeout(() => {
            setAlert({
              ...alert,
              display: false,
              type: "warning",
              text: "",
            });
          }, 4000);
        }
      }}
      
      >
        
        <p className='font-[inter] text-[40px] text-[#493636] font-[500]'>Reset Password</p>

        <div className='flex flex-col gap-5'>
          <Input
            label="New password"
            type="password"
            value={data.new_password}
            warning={warningpassword}
            onChange={(event) => {
              setData({ ...data, new_password: event.target.value });
            }}
            
          />

  
          <Input
            label="Confirm New Password"
            type="password"
            value={data.re_new_password}
            warning={warningre_password}
            onChange={(event) => {
              setData({ ...data, re_new_password: event.target.value });
            }}
          />
          
        </div>   

        <button 
 
          className='px-10 py-2 text-white rounded-md bg-gray hover:bg-opacity-90 '>
           
           
           {alert.display? "Sent to Gmail" :"Send"}
        </button> 

<div className={alert.display? "block animate-pulse" : "hidden"}>
            <Alert severity={alert.type} variant="outlined">
              {alert.text}
            </Alert>
          </div>
        
      </form>

      {/* Background Images */}
      <div className=" absolute flex flex-row w-full h-[60%] justify-evenly pointer-events-none">

          <div className=" w-[50%] h-[100%] flex justify-center animate__animated animate__fadeInLeft  ">

          <img
                    src={Map}
                    className="absolute z-10 object-contain w-full h-full pointer-events-none animate-float"
                    alt=""
                  />
          </div>
          <div className="flex flex-col w-[50%] h-[100%] animate__animated animate__fadeInRight pointer-events-none ">
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

export default ResetPassword