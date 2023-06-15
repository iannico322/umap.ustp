import { useState } from "react";
import axios from "../plugins/axios";
import GetSchedules from "./schedules";

const PostSchedule = () => {

 let schedules = GetSchedules() ;

const [schedData,setSchedData]= useState({
    userID: localStorage.getItem("id"),
    title:"",
    room:"",
    date:"MON",
    startTime:"",
    endTime:""
    })

  const handleSubmit = async (e) => {
    e.preventDefault();

        console.table(schedData)

   
      await axios.post("schedules/", {
        "userID": localStorage.getItem("id"),
        "roomID": schedData.room,
        "title": schedData.title,
        "time": `${schedData.startTime}-${schedData.endTime}`,
        "date": schedData.date,
        "description": "Gwapo si Nico"
    }
    
    ,{
        headers: {
          Authorization: `Token ${localStorage.getItem("access")}`,
        },
      }).then(()=>{
        
        setSchedData({
            userID: localStorage.getItem("id"),
            title:"",
            room:"",
            date:"MON",
            startTime:"",
            endTime:""
            })

            window.location.reload(true)
        
      })
    
     
      
    
  };

  return { schedData, setSchedData, handleSubmit,schedules };
};

export default PostSchedule;
