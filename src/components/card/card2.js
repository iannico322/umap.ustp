import React from 'react'
import './card.css'
import EventImage from './../../media/image/sched-pic.png'
import LocIcon from './../../media/image/point.png'
export const Card2 = (props) => {
  return (
    <div
    className="flex animate__animated animate__fadeInLeft hover:bg-[#d4d4d42b] transition-colors items-center justify-center w-full backdrop-blur-md bg-[#ffffff80] py-4 border-b-[1px] border-[#8080803f]"
    onMouseOver={props.onMouseOver}
    onMouseOut={props.onMouseOut}
  >
    <div className=" pointer-events-none flex justify-between w-[90%] items-center">
      <img
        src={EventImage}
        className=" h-[40px] pointer-events-auto object-contain hover:animate-bounce"
        alt="Logo"
      />
      <div className=" text-gray w-[60%] leading-[12px] pointer-events-none">
        <div className="text-lg font-semibold truncate pointer-events-none text-[#177217]">
          {props.title}
        </div>
        <div className="text-[12px] font-normal truncate text-[#606060] pointer-events-none">
          <span className="font-bold ">{props.date} </span> | {props.time}
        </div>
      </div>
      <div
        className="flex items-center cursor-pointer pointer-events-auto hover:bg-white hover:drop-shadow-md hover:animate-pulse text-[#9c9c9c] bg-[#cecece5a] gap-3 px-4  py-2 rounded-lg "
        onClick={props.onClick}
      >
        <img src={LocIcon} className="object-contain w-5 h-8 " alt="" />
        <h2>{props.building}</h2>
      </div>
    </div>
  </div>
  )
}
