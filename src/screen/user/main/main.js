import React, { Suspense, useEffect } from 'react'
import { UserNav } from '../../../components/navbar/userNav'

import { Outlet } from 'react-router-dom'
import Loader2 from '../../../components/loader/load2'
import { useNavigate } from "react-router-dom";
const Main = () => {
  const navigate = useNavigate();

  
  useEffect(()=>{
    function isLocalStorageAvailable() {
      var access = 'access';
      try {
        localStorage.setItem("access", access);
        localStorage.removeItem(access);
        return true;
      } catch (e) {
        return false;
      }
    }


      if (isLocalStorageAvailable()===true ) {
        navigate("/welcome");
      }
    
  },[])

  

  
  
  return (
    <div className='w-screen h-screen overflow-x-hidden bg-white '>
        <UserNav />
        <div className='z-10 w-full h-full '>
          <Suspense fallback={<Loader2 />}>
            <Outlet />
          </Suspense>
        </div>

    </div>
  )
}

export default Main