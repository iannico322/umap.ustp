import React, { useEffect, useState } from 'react'
import Input from '../../../components/input/input'
import axios from '../../../plugins/axios'
import AuthenticationNav from '../../../components/navbar/authenticationNav'
import T from '../../../images/t.png'
import plus from '../../../images/plus.png'
import box from '../../../images/box.png'
import { useNavigate, useParams }  from 'react-router-dom';
import { LongButton } from '../../../components/button/longButton'
import { Alert } from "@mui/material";

const ForgotPassword2 = () => {
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
    <AuthenticationNav />
    {/* Whole Screen Container */}
    

      {/* Input box */}
      <form  className='z-20 w-[30%] min-w-[400px] min-h-[10px] flex flex-col mt-16 px-12 py-8 gap-5 pb-14 rounded-3xl absolute bg-[#D9D9D9] backdrop-blur-lg bg-opacity-25'
      
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
        
        <p className='font-[inter] text-[30px] text-[#493636] font-[700]'>Forgot Password</p>

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

        <LongButton 
          label = "Change Password"
        />

<div className={alert.display? "block animate-pulse" : "hidden"}>
            <Alert severity={alert.type} variant="outlined">
              {alert.text}
            </Alert>
          </div>
        
      </form>
      

      {/* Background Images */}
      <div className=" absolute flex flex-row w-full h-[60%] justify-evenly pointer-events-none">

          <div className=" w-[50%] h-[100%] flex justify-center ">

            <img
              src={T}
              className="xl:h-[560px] xl:w-[500px] 2xl:h-[820px] 2xl:w-[750px] object-contain absolute z-10 animate-floatHouse"
              alt=""
            />
          </div>
          <div className="flex flex-col w-[50%] h-[100%]">
            <img
              src={plus}
              className=" animate-floatCalcu z-10 absolute xl:h-[450px] xl:w-[680px] 2xl:h-[950px] 2xl:w-[880px] object-contain ml-[-150px] xl:mt-[-260px] 2xl:mt-[-500px] top-0"
              alt=""
            />
            <img
              src={box}
              className=" animate-floatCash1 z-0 absolute xl:h-[250px] xl:w-[350px] 2xl:h-[400px] 2xl:w-[400px] object-contain bottom-0 right-0"
              alt=""
            />
          </div>

          

        </div>
    </div>

   
  )
}


export default ForgotPassword2