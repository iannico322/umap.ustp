import Cloud1 from "./../../media/image/cloud_1.png";
import Cloud2 from "./../../media/image/cloud_2.png";

import MapImage from "./../../media/image/map.png";
import Sun from "./../../media/image/sun.png";

import SignIn from "./../authentication/signIn/sign-in";
import "./slide.css";
import SignUp from "./../authentication/signUp/sign-up";
import { useEffect, useState } from "react";
import UmapLogo from "./../../media/image/umap-logo.png";
import { Link, useNavigate } from "react-router-dom";


const Welcome = () => {




  const navigate = useNavigate()
  // useEffect(()=>{
  //   if(localStorage.getItem('name') !=" " || localStorage.getItem('email') !=" "){
  //     navigate("/home/dashboard")
  //     console.log("12")
  //   }
  // },[])



  const [isclick, setclick] = useState(false);
  const WelcomePage = () => {
    setclick(!true);
    const move = document.querySelector("#bg-move");
    const welcome = document.querySelector("#welcome");
    const signIn = document.querySelector("#sign-in");
    const signup = document.querySelector("#sign-up");

    move.style.transform = "translateX(0vw)";
    welcome.style.transform = "translateX(0vw)";

    signIn.style.transform = "translateX(100vw)";
    signIn.style.opacity = "100";
    signup.style.opacity = "0";
    signup.style.transform = "translateX(-120vw)";
    signup.style.opacity = "0";
    signup.style.PointerEvent = "none";
    welcome.style.opacity = "100";
  };

  const SignUpPage = () => {
    const move = document.querySelector("#bg-move");
    const welcome = document.querySelector("#welcome");
    const signup = document.querySelector("#sign-up");
    const signIn = document.querySelector("#sign-in");
    setclick(!true);
    signIn.style.opacity = "0";
    signIn.style.transform = "translateX(-100vw)";

    move.style.transform = "translateX(-120vw)";

    signup.style.transform = "translateX(0vw)";
    signup.style.opacity = "100";

    welcome.style.transform = "translateX(-160vw)";
    welcome.style.opacity = "0";
  };

  const SignInPage = () => {
    const move = document.querySelector("#bg-move");
    const welcome = document.querySelector("#welcome");
    const signIn = document.querySelector("#sign-in");
    const signup = document.querySelector("#sign-up");
    setclick(!isclick);

    move.style.transform = "translateX(-60vw)";

    signIn.style.transform = "translateX(0vw)";
    signIn.style.opacity = "100";
    signup.style.opacity = "0";
    signup.style.transform = "translateX(-120vw)";
    signup.style.PointerEvent = "none";
    welcome.style.transform = "translateX(-60vw)";
    welcome.style.opacity = "0";
  };

  return (
    <>
      <div className="relative w-screen h-screen overflow-hidden bg-slate-50 ">
        <p></p>
        <div className="fixed top-0 z-50 flex items-center justify-around object-contain w-full mt-4 cursor-pointer h-14 animate__animated animate__fadeInDown ">
          <img
            src={UmapLogo}
            className="z-50 sm:h-8 h-10 object-contain cursor-pointer hover:scale-[0.9] transition-transform "
            alt="umap-logo"
            onClick={() => {
              WelcomePage();
            }}
          />

          <ul className="flex items-center gap-4 sm:gap-2 ">
            <li
              className="px-6 py-3 sm:px-3 rounded-lg cursor-pointer hover:bg-[#d5d5d561]"
              onClick={() => {
                setclick(!isclick);

                isclick ? SignUpPage() : SignInPage();
              }}
            >
              {isclick ? "Sign Up" : "Sign In"}{" "}
            </li>
            <li>
              {" "}
              <button className=" text-base hover:bg-green-500 active:bg-green-300 text-white px-6 rounded-lg py-3 bg-yellow sm:text-sm hover:scale-[1.07] transition-transform">
                Download App
              </button>{" "}
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center w-full h-full ">
          <div
            id="welcome"
            className="absolute z-40 flex items-center justify-center w-full h-full translate-x-10 "
          >
            <div className="relative z-30 flex  items-center justify-start min-w-[55%] bg-transparent h-full">
              <div className=" flex flex-col border-[1px] animate__animated  animate__fadeInUp border-[#80808036] items-center justify-center py-14 sm:py-4 gap-2 h-[400px] sm:w-[700px] w-[630px] backdrop-blur-lg rounded-[60px] m-10 sm:m-4 bg-[#D9D9D9] bg-opacity-20">
                <h1 className="text-[#333333] font-bold text-[50px] sm:text-[40px] leading-[75px] text-center drop-shadow-md shadow-slate-100 ">
                  Welcome to <br />{" "}
                  <span className=" text-yellow font-bold sm:text-[60px] text-[70px]">
                    USTP Map
                  </span>{" "}
                </h1>

                <div className="flex gap-5 ">
                  <button
                    className="px-8 py-4 font-semibold text-white sm:px-4 sm:text-base sm:py-4 bg-yellow hover:bg-opacity-40 active:bg-opacity-20 hover:bg-green-500 rounded-2xl"
                    onClick={() => {
                      SignInPage();
                    }}
                  >
                    Student
                  </button>
                  <Link
                    className=" bg-[#282828] sm:px-4 sm:text-base sm:py-4  hover:bg-opacity-40 active:bg-opacity-20  bg-opacity-100  px-8 py-4 text-[#e8e8e8] font-semibold rounded-2xl "
                    to="/guest"
                  >
                    I’m a guest
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            id="sign-in"
            className="absolute z-40 flex items-center justify-center w-full h-full translate-x-10 pointer-events-none "
          >
            <SignIn />
          </div>

          <div
            id="sign-up"
            className="absolute z-40 flex items-center justify-center w-full h-full translate-x-10 pointer-events-none "
          >
            <SignUp />
          </div>

          <div id="bg-move" className="fixed flex items-center justify-evenly">
            <div className="  fixed flex items-center  justify-evenly    w-[220vw]">
              <div className="  fixed flex items-center justify-evenly h-[80vh] w-[100vw]">
                <div className="flex self-end translate-x-[-150px] animate__animated animate__fadeInBottomLeft ">
                  <img
                    src={Cloud1}
                    alt=""
                    className=" h-[600px] w-[500px] object-contain animate-floatHouse"
                  />
                </div>

                <div className=" w-[900px] h-[600px] relative animate__animated animate__fadeInUp  ">
                <div className="absolute z-20 ">
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
               

                  <img
                    src={MapImage}
                    className="absolute z-10 object-contain w-full h-full animate-float"
                    alt=""
                  />
               
                </div>
              </div>
              <div className=" pointer-events-auto  absolute right-0 flex flex-col translate-x-[-150px] ">
                <img
                  src={Cloud1}
                  alt=""
                  className=" animate-floatHouse h-[500px] w-[500px] object-contain"
                />
                <p className="z-50 text-center cursor-pointer ">
                  {isclick
                    ? "Don’t have an account?"
                    : " Already have an account?"}
                  <span
                    className="ml-3 font-bold hover:underline"
                    onClick={() => {
                      setclick(!isclick);

                      isclick ? SignUpPage() : SignInPage();
                    }}
                  >
                    {isclick ? "Create New One" : "Sign In"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
