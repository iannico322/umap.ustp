import React, { useEffect, useState } from "react";

import Plus from "../../../media/image/+.png";
import Ex from "../../../media/image/x-icon.svg";
import bgImage from "../../../media/image/Group 274.png";
import "./profile.css";
import { Search2 } from "../../../components/search/search2";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { users } from "../../../cache/userCredentials";
import { searchs, addSearch } from "../../../cache/userSearch";
import { rooms } from "../../../cache/umapRoom";
import Input from "../../../components/input/input";
import PostSchedules from "../../../view-model/postSchedule";


const Profile = () => {
  const dispatch = useDispatch();
  const [clicked,setclicked]= useState(false)

  const { schedData, setSchedData, handleSubmit,schedules } = PostSchedules();


  const roomses = useSelector(rooms);



  const Destination = (newQuery) => {
    setSchedData({...schedData,room:newQuery})

  };

  
  return (
    <>


      <div className={clicked?"absolute bg-[#5d5d5d45] z-50 flex items-center justify-center w-screen h-screen schedule-container":"hidden"}>
        <div className="bg-white form-con h-[500px] w-[700px] px-10 py-10 border-[1px] rounded-lg border-[#56565670] animate__animated animate__fadeInUp">
          <div className="flex justify-between w-full">
            
              <h1 className="text-3xl font-bold ">Set <span className=" text-yellow">Schedule</span> </h1>
              <span className="text-[40px] cursor-pointer material-symbols-outlined" 
                onClick={() => {
                  setclicked(false)
                }}>
              close
              </span>
             
          
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex items-center mt-4 gap-9 ">
              <div className=" w-[50%] flex flex-col gap-5">
             
                <Input
                  type="text"
                  label="Schedule title"
                  value={schedData.title}
                  onChange={(e) => {
                    setSchedData({...schedData,title:e.target.value});
                  }}
                />
                <Search2 onDistination={Destination} />
              </div>

              <div className="">
              <p className="text-base text-[#323232] mb-1 font-semibold" > Day? </p>
              <select
                className="p-2 pl-4 outline-none  font-bold pr-5   border-[1px] border-[#94949400] text-[120px] rounded-md w-full box-border cursor-pointer bg-white "
                required
                value={schedData.date}
                onChange={(e) => {
                  setSchedData({...schedData,date:e.target.value})
                }}
              >
                <option value="MON" selected>
                  MON
                </option>
                <option value="TUE">TUE</option>
                <option value="WED">WED</option>
                <option value="THU">THU</option>
                <option value="FRI">FRI</option>
                <option value="SAT">SAT</option>
                <option value="SUN">SUN</option>
              </select>
            </div>
              

              
            </div>


            

            <div className="flex flex-col w-full">
              <p className="self-center font-bold truncate">---------------------------------------Time duration-----------------------------------------</p>
              <div className="flex items-center justify-end w-full gap-4 ">

                <div>
                  <p>Start</p> <Input
                    type="time"
                    required
                    value={schedData.startTime}
                    onChange={(e) => {
                      setSchedData({...schedData,startTime:e.target.value});
                    }}
                  />
                </div>

         

                <div>
                  <p>End</p>
                  <Input
                    type="time"
                    value={schedData.endTime}
                    required
                    onChange={(e) => {
                      setSchedData({...schedData,endTime:e.target.value});
                    }}
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="w-full px-3 py-3 mt-5 text-white rounded-md hover:bg-opacity-90 bg-gray">
              Submit
            </button>

          </form>
        </div>
      </div>


      {/* //profile screen z-index 1 */}
     <div className="flex-col w-screen overflow-x-hidden animate__animated animate__backInUp">
    

        <div className=" h-[300px] pt-3 bg-[#dbdbdb] border-y-[1px] border-[#22222270] w-full mt-[8%] flex items-center justify-center">
          <img src={bgImage} alt="" />
        </div>

        <div className="flex justify-between py-[2%] items-center">
          <h1 className="ml-[80px] text-[70px] capitalize font-semibold text-[#626262]">{localStorage.getItem("name")}</h1>
          <button className="px-20 h-[50px] hover:bg-opacity-90 mr-40 text-xl font-medium text-white rounded-lg bg-yellow">Edit</button>
        </div>

        {/* //reminder space */}
        <div className="flex justify-center h-full pb-9">
          <div className=" w-[90%] mt-3 flex h-full flex-wrap gap-8"  >
            <div
              className="flex items-center justify-center w-80 h-60 cursor-pointer bg-[#c3c3c3] "
              onClick={() => {
             
                  setclicked(true)
               
              }}
            >
              <img src={Plus} alt="Plus-icon" />
            </div>
            {schedules.map((sched, key) => (
              
              
              <Link to="/umap/main" key={key}
                className=" flex flex-col items-center justify-center w-80  h-60 cursor-pointer bg-[#ffffff] border-[1px] border-[#80808086] "
                onClick={() => {
                  
                  dispatch(
                    addSearch({
                      location: `| ${roomses[0].filter((z) => z.roomID == sched.roomID)
                        .map((e) => e.roomName)}`,
                      buildingID: `${roomses[0].filter((z) => z.roomID == sched.roomID)
                        .map((e) => e.buildingNumber)}`,
                      room: sched.title,
                      floor: sched.date,
                      block: sched.time,
                    })
                  );

                  
                }}
                
              >
                <div className="flex flex-col items-center w-full h-full ">
                  <div className=" h-[30%] flex items-center w-full justify-center bg-[#515151] text-base font-semibold">
                    <p className="px-2 text-white truncate ">{roomses[0].filter((z) => z.roomID == sched.roomID)
                      .map((e) => e.roomName)} 
                      </p>
                  </div>

                  <div className=" h-[70%] flex items-center w-full justify-center bg-[#ffffff] text-base font-semibold "> 
                    <p className=" text-[ 15px] truncate px-2"> {sched.title} </p> 
                    </div>
                </div>

                <div className=" h-[20%] flex items-center w-full justify-between bg-white border-t-[1px] border-[#80808076] text-base font-semibold">
                  <div className="pl-2 ">{sched.date}</div>
                  <div className="pr-2 ">{sched.time}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile
