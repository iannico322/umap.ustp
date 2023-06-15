import React from 'react'

import './load.css'


const Loader = () => {
  return (
    <div className=' h-screen  w-screen bg-[white] flex items-center justify-center flex-row-reverse gap-20 '>
       
        
        <div class="wrapper">
            <div class="box-wrap">
                <div class="box one"></div>
                <div class="box two"></div>
                <div class="box three"></div>
                <div class="box four"></div>
                <div class="box five"></div>
                <div class="box six"></div>
            </div>
        </div>
    </div>
    
  )
}

export default Loader