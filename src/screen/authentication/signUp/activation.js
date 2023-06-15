import React, { useState } from 'react'
import axios from  './../../../plugins/axios';
import { useNavigate, useParams }  from 'react-router-dom';
import { Alert } from "@mui/material";
const Activation = () => {

  const navigate = useNavigate()
  const data = useParams()

  const [ok,setok]=useState(false)

  const [alert, setAlert] = useState({
    display: false,
    type: "warning",
    text: "",
  });
  
  
  

  
  return (
    <div className='w-screen h-screen'>
      <div className=' h-[80%] bg-yellow text-white sm:h-full flex  w-full items-center  justify-center '>

        <div className='text-gray-100  w-[60%] flex items-center flex-col gap-3 sm:w-[90%] '>
          <h1 className='text-[40px] text-gray  font-normal sm:text-[30px] '>UMAP</h1>

          <hr className=' borde-b-[.4px] border-[#797979] w-[40%] my-4 min-w-[500px] sm:min-w-[200px] sm:my-2'  />

          <p className='text-[60px] text-gray font-semibold sm:text-[40px] text-center '>{ok?"Successfully Activated ":"You're Almost There!"}</p>

          <p className='text-[18px] text-center sm:text-[16px]   '>{
          ok?" Sign in now ":"Just one more step to get started"}</p>





          <button 
          
          style={{display:ok?" none":"flex"}}
          
          className='px-10 py-3 text-lg font-semibold rounded-lg bg-gray active:bg-opacity-75 sm:text-lg hover:bg-opacity-90 mt-9 '
          
          
          onClick={()=>{
         
         
              setAlert({
                ...alert,
                display: true,
                type: "info",
                text: "Loading Please wait...",
              });


              
                axios
                .post("users/activation/", data)
                .then((response) => {
                  console.table(response)
                  setAlert({
                    ...alert,
                    display: true,
                    type: "success",
                    text: "Great! Your account is succesfully activated",
                  });

                  setok(true)

                  setTimeout(() => {
                    setAlert({
                      ...alert,
                      display: false,
                      type: "warning",
                      text: "Invalid Parameters, please dont change the link",
                    });
                  }, 4000);


                }).catch(response=>{
                  

                  try {
                    setAlert({
                    ...alert,
                    display: true,
                    type: "error",
                    text: JSON.parse(response.request.response).uid[0],
                  });
                  } catch (e) {
                    
                  }

                  try {
                    setAlert({
                    ...alert,
                    display: true,
                    type: "error",
                    text: JSON.parse(response.request.response).detail,
                  });
                  } catch (e) {
                    
                  }
                  

                })

              
              setTimeout(() => {
                setAlert({
                  ...alert,
                  display: false,
                  type: "warning",
                  text: "",
                });
              }, 4000);
            }
          


          }
          
          
          >{ alert.display?"Activating...":"Activate Account"}</button>



<button 
          
     
          
          className='px-10 py-3 text-lg font-semibold text-white rounded-lg bg-gray active:bg-opacity-75 sm:text-lg hover:bg-opacity-90 mt-9 '
          
          style={{display:ok?"flex ":"none"}}
          onClick={()=>{
            navigate('/')
         
          }


          }
          
          
          >Go Sign In</button>

<div className={alert.display ? "block animate-pulse" : "hidden"}>
            <Alert severity={alert.type} variant="outlined">
              {" "}
              {alert.text}
            </Alert>
          </div>
        
        </div>

      </div>


    </div>
  )
}

export default Activation