import React, { useEffect, useState } from "react";
import Input from "./../../../components/input/input";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
import SignInViewModel from "../../../view-model/signIn";
const SignIn = () => {
  const navigate = useNavigate();
 
  const { data, setData, handleSubmit } = SignInViewModel({
      onSignIn: () => {
        navigate("/umap/main");
      }
  
    ,
    onAlert: (alert) => {
      setAlert(alert);
    },
  });
  const [alert, setAlert] = useState({
    display: false,
    type: "warning",
    text: "",
  });

 
  useEffect(()=>{
    if (localStorage.getItem("access") != null) {
      navigate("/umap/main");
    }
  },[])

  


  return (
    <div className=" relative flex items-center justify-start min-w-[65%]  h-full   ">
      <div className=" border-[1px] border-[#80808036] flex flex-col pt-10 pb-5 px-14 gap-2 min-h-[450px] w-[630px] backdrop-blur-lg rounded-[30px] m-10 bg-[#D9D9D9] bg-opacity-20">
        <p className="font-[inter] text-[40px] text-[#493636] font-[500]">
          Sign In
        </p>

        <form
          className=" w-[100%] px-4 mt-10 pointer-events-auto flex gap-4 flex-col"
          onSubmit={handleSubmit}
        >
          <Input
            label="Email"
            type="email"
            value={data.email}
            onChange={(event) => {
              setData({ ...data, email: event.target.value });
            }}
          />

          <Input
            label="Password"
            type="password"
            value={data.password}
            onChange={(event) => {
              setData({ ...data, password: event.target.value });
            }}
          />
          <div className="flex items-center justify-between mt-4 ">
            <p
              className="font-light cursor-pointer hover:underline"
              onClick={() => {
                navigate("/forgot-password");
              }}
            >
              Forgot password?
            </p>
            <button
              style={{ pointerEvents: alert.display ? "none" : "auto" }}
              className="px-10 py-4 text-white rounded-md bg-gray hover:bg-opacity-90 "
            >
              Sign In
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

export default SignIn;
