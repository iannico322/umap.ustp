import { useSelector,useDispatch } from "react-redux";
import ArrowForward from "../../media/image/arrow_forward.svg";
import ArrowBackward from "../../media/image/arrow_back.svg";
import { searchs,addSearch } from "../../cache/userSearch";
import { rooms } from "../../cache/umapRoom";
import { Card } from "../../components/card/card";
import { Card2 } from "../../components/card/card2";
import { useMemo, useState } from "react";
import GetEvents from "../../view-model/events";
import GetSchedules from "../../view-model/schedules";



const EventCalender = () => {

  const events = GetEvents()
  const schedules = GetSchedules()
  const dispatch = useDispatch();
  const [show,setShow] = useState(true)
  const searches = useSelector(searchs);
  const roomses = useSelector(rooms);

  const CurrentDay =()=> {
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const currentDay = new Date().getDay();
  
    return daysOfWeek[currentDay];
  }

//   setInterval(()=>{
//     const currentDate = new Date();
//     const formattedDate = currentDate.toLocaleString('en-US', {
//       month: 'short',
//       day: 'numeric',
//     });
//     const formattedTime = currentDate.toLocaleString('en-US', {
//       hour: 'numeric',
//       minute: 'numeric',
//       hour12: true,
//     });
//     return {formattedDate,formattedTime};

// },1000)

  const GD = ()=>{
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
    });

    return formattedDate
}

const GT = ()=>{

 
    const currentDate = new Date();
    const formattedTime = currentDate.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    return formattedTime;

}







  const dateFormat = (date) => {
    const months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    return `${months[month - 1]} ${day}`;
  };


  return (
    <>
      <div className={show ? "hidden event animate__animated animate__bounceInLeft":"event animate__animated animate__bounceInLeft"}>
        <div className="box">
          <div
            className=" flex bg-yellow w-[200px] h-16 justify-around items-center rounded-lg text-white"
           
          >
            <div className="text-2xl font-bold ">Events</div>
            <span className="mr-6 text-3xl cursor-pointer pointer-events-auto material-symbols-outlined animate-arrow"
             onClick={() => {
                setShow(true)
              }}
            
            >
            arrow_forward_ios
            </span>
          </div>
        </div>
      </div>

      {/* //Event eventBoard hide */}
      <div className={show?" w-[400px]  min-h-[200px] border-[1px] transition-transform border-[#80808015] rounded-lg  ":"hidden"}>
        <div className="">
          <div className="flex  items-center justify-between h-16 text-white leading-[-2px] bg-yellow">
            {/* clock */}
            <div className="flex flex-col gap-0  ml-[25px] leading-tight">
              <div className="text-sm font-bold uppercase sm:text-xs ">{GD()}</div>
              <div className="text-xs font-light sm:text-xs ">{GT()}</div>
            </div>
            <div className=" text-2xl font-bold w-[60%] sm:text-base ">Upcoming Events</div>



            <span className="mr-6 text-3xl cursor-pointer pointer-events-auto material-symbols-outlined animate-arrow"
            onClick={() => {
                setShow(false)
              }}
            
            >
            arrow_back_ios
            </span>
          </div>

          {/* //Event eventBoard show */}
          <div className="event-content drop-shadow-md min-h-[100px] z-0 pointer-events-none max-h-[320px] scroll-smooth pb-4  overflow-y-scroll box">
            {events.length == 0?
            
            (
              <div className="flex items-center justify-center w-full h-[100px] bg-[#dfdfdf88]">
                <h1 className=" text-[#484848] text-lg font-semibold cursor-pointer ">
                  No Events found
                </h1>
              </div>
            ) 
          :            
          
          (events.map((event,key) => (
            <Card
              key={key}
              title={event.title}
              time={event.time}
              date={dateFormat(event.date)}
              building={event.locationID}
              onClick={() => {
                dispatch(
                  addSearch({
                    location: `| ${roomses[0]
                      .filter(
                        (z) =>
                          z.roomID === event.locationID.split(" ").join("")
                      )
                      .map((e) => e.roomName)}`,
                    buildingID: `${roomses[0]
                      .filter(
                        (z) =>
                          z.roomID === event.locationID.split(" ").join("")
                      )
                      .map((e) => e.buildingNumber)}`,
                    room: `${event.title}`,
                    floor: dateFormat(event.date),
                    block: event.time,
                  })
                );
                console.log(searches);
              }}
              onMouseOver={() => {
                dispatch(
                  addSearch({
                    location: `| ${roomses[0]
                      .filter(
                        (z) =>
                          z.roomID === event.locationID
                      )
                      .map((e) => e.roomName)}`,
                    buildingID: `${roomses[0]
                      .filter(
                        (z) =>
                          z.roomID === event.locationID
                      )
                      .map((e) => e.buildingNumber)}`,
                    room: `${event.title}`,
                    floor: "",
                    block: "",
                  })
                );
              }}
              onMouseOut={() => {}}
            />
          )))
          }
            
            

            {schedules.filter(e=>e.date == CurrentDay()).map((sched, key) => (
                <Card2
                  key={key}
                  title={sched.title}
                  time={sched.time}
                  date="Today"
                  building={sched.roomID}
                  onClick={() => {
                    dispatch(
                      addSearch({
                        location: `| ${roomses[0]
                          .filter((z) => z.roomID === sched.roomID)
                          .map((e) => e.roomName)}`,
                        buildingID: `${roomses[0]
                          .filter((z) => z.roomID === sched.roomID)
                          .map((e) => e.buildingNumber)}`,
                        room: `${sched.title}`,
                        floor:sched.date,
                        block: sched.time,
                      })
                    );
                  }}
                  onMouseOver={() => {
                    dispatch(
                      addSearch({
                        location: `| ${roomses[0]
                          .filter((z) => z.roomID === sched.roomID)
                          .map((e) => e.roomName)}`,
                        buildingID: `${roomses[0]
                          .filter((z) => z.roomID === sched.roomID)
                          .map((e) => e.buildingNumber)}`,
                        room: `${sched.title}`,
                        floor: sched.date,
                        block: sched.time,
                      })
                    );
                  }}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCalender;
