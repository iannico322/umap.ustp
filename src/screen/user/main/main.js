import React, { Suspense } from 'react'
import { UserNav } from '../../../components/navbar/userNav'

import { Outlet } from 'react-router-dom'
import Loader2 from '../../../components/loader/load2'

const Main = () => {
  

  
  
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