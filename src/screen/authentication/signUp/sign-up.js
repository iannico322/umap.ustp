import React, { useEffect, useState } from "react";
import Input from "./../../../components/input/input";
import axios from "./../../../plugins/axios";

import { Alert } from "@mui/material";
import { Try } from "@mui/icons-material";
const SignUp = () => {
  let isItlong = false;
  let hasNumber = false;
  let isValid = false;

  const [data, setData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    re_password: "",
  });

  const [alert, setAlert] = useState({
    display: false,
    type: "warning",
    text: "",
  });
  const [warningpassword, setwarningpassword] = useState();
  const [warningre_password, setwarningre_password] = useState();

  useEffect(() => {
    if (data.password.length > 8) {
      isItlong = true;
    } else {
      isItlong = false;
    }

    if (/\d/.test(data.password)) {
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

    if (data.password.length <= 1) {
      setwarningpassword("");
    }

    

  }, [data.password, data.re_password]);

  useEffect(() => {
    if (data.re_password == data.password) {
      setwarningre_password("Password Matched,Great!");
    } else {
      setwarningre_password("Password not Matched");
    }

    if (data.re_password.length < 1) {
      setwarningre_password("");
    }


  }, [data.password, data.re_password]);

  return (
    <div className=" relative flex items-center justify-end min-w-[75%]  h-full  pointer-events-none  ">
      <div className=" border-[1px] border-[#80808036] flex flex-col py-10 px-14 gap-2 min-h-[550px] w-[730px] backdrop-blur-lg rounded-[60px] m-10 pointer-events-none  bg-[#D9D9D9] bg-opacity-20">
        <p className="font-[inter] text-[40px] text-[#493636] font-[500]">
          Sign Up
        </p>

        <form
          className=" w-[100%] flex flex-col px-4 mt-10 pointer-events-auto gap-4 "
          onSubmit={ async (e) => {
            e.preventDefault();
           
            if (
              warningpassword == "Great Password!" &&
              data.re_password == data.password
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
                .post("users/", data)
                .then(() => {
                  setAlert({
                    ...alert,
                    display: true,
                    type: "success",
                    text: "Registeration complete, please check your email for your account activation",
                  });

                  setData({
                    email: "",
                    first_name: "",
                    last_name: "",
                    password: "",
                    re_password: "",
                  })

                  setTimeout(() => {
                    setAlert({
                      ...alert,
                      display: false,
                      type: "warning",
                      text: "",
                    });
                  }, 4000);
                })
                .catch((response) => {

                  try{
                    setAlert({
                    ...alert,
                    display: true,
                    type: "warning",
                    text: JSON.parse(response.request.response).email[0],
                  });
                  }catch(e){
                   
                  }


                  try{
                    setAlert({
                    ...alert,
                    display: true,
                    type: "warning",
                    text: JSON.parse(response.request.response).password[0],
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
                text: "Invalid Credentails - Make sure you made all things right",
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
          <div className="box-border flex w-full gap-5">
            <Input
              label="First Name"
              type="text"
              value={data.first_name}
              onChange={(event) => {
                setData({ ...data, first_name: event.target.value });
              }}
            />

            <Input
              label="Last Name"
              type="text"
              value={data.last_name}
              onChange={(event) => {
                setData({ ...data, last_name: event.target.value });
              }}
            />
          </div>
          <Input
            label="Email"
            type="email"
            value={data.email}
            onChange={(event) => {
              setData({ ...data, email: event.target.value });
            }}
          />
          <div className="box-border flex justify-between w-full gap-5">
            <Input
              label="Password"
              type="password"
              value={data.password}
              warning={warningpassword}
              onChange={(event) => {
                setData({ ...data, password: event.target.value });
              }}
            />

            <Input
              label="Confirm Password"
              type="password"
              value={data.re_password}
              warning={warningre_password}
              onChange={(event) => {
                setData({ ...data, re_password: event.target.value });
              }}
            />
          </div>
          <div
            className={
              alert.display
                ? " pointer-events-none"
                : "pointer-events-auto" + " mt-4 "
            }
          >
            <button 
        
        className='bg-[#2B2B2B] flex items-center gap-3 justify-center hover:bg-opacity-90 h-[43px] w-[100%] text-[#ffffff] font-[inter] font-[500] rounded-lg shadow-md'>
        

        <span className={alert.display?"material-symbols-outlined  animate-spin  ":"hidden material-symbols-outlined "}>
           refresh
        </span>
        Sign Up
  </button>
          </div>

          <div className={alert.display ? "block animate-pulse" : "hidden"}>
            <Alert severity={alert.type} variant="outlined">
              {" "}
              {alert.text}
            </Alert>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
