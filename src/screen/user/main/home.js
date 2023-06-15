import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Float,} from "@react-three/drei";
import { Suspense, useState, lazy} from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { Map } from "./Map";
import { Location } from "./Location";
import Map2d from "./../../../media/image/2dmapc.jpg";
import Cloud1 from "./../../../media/image/cloud_2-big.png";
import "./main.css";
import { Cloud } from "./Cloud";
import { Search } from "../../../components/search/search";

import { useSelector } from "react-redux";
import { searchs} from "../../../cache/userSearch";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import GetRooms from '../../../view-model/rooms'
import EventLoader from "../../event-calendar/event-loader";
const EventCalender = lazy(() =>
  wait(1000).then(() => import("../../event-calendar/event"))
);


function Home() {
  GetRooms()
  const searches = useSelector(searchs);
  const [mapzoom,setmapzoom] = useState(50)


 
  
  
  return (
    <>
      <div className="flex w-screen h-screen overflow-hidden main-screen ">
        <img
          src={Cloud1}
          className=" animate-floatCloud h-[300px] w-[300px] object-contain rotate-[-25deg] translate-x-[30px] translate-y-[-30px] absolute left-0 pointer-events-none m-[10%]  z-0"
          alt="cloud"
        />

        <div className="w-full h-full bg-white ">
          <div className="flex absolute items-start z-20 w-full h-[80%] md:mt-[20%] mt-[10%] ml-[5%] pointer-events-none max-w-[80%]  ">
            <Suspense fallback={<EventLoader />}>
              <EventCalender />
            </Suspense>
          </div>


{/* Search */}
          <div className=" min-w-[30%] sm:min-w-[50%] sm:max-w-[80%] absolute right-0 mx-[10%] md:my-[30%] max-w-[60%]  my-[15%] z-20  ">
            <Search />
          </div>



{/* 2d Map */}
          <div className="absolute bottom-0 right-0 w-[200px] z-30 h-[250px] mb-[5%] mr-[10%] pointer-events-none flex flex-col  items-end  ">
            <div className="flex text-white ">
              <div
                className="flex items-center justify-center h-[40px] text-lg rounded-s-md bg-gray w-[60px]
              hover:bg-opacity-90 active:scale-[1.02] border-r-[1px] border-[#ffffff68] cursor-pointer pointer-events-auto
              "
                onClickCapture={
                  ()=>{
                    console.log("2")
                  }
                }
                onClick={() => {
                  setmapzoom(mapzoom - 1);
                }}
              >
                +
              </div>
              <div
                className="flex items-center justify-center h-[40px] text-lg rounded-e-md bg-gray w-[60px]
                hover:bg-opacity-90 active:scale-[1.02]   border-[#ffffff68] cursor-pointer pointer-events-auto"
                onClick={() => {
                  setmapzoom(mapzoom + 1);
                }}
              >
                -
              </div>
            </div>

            <div className=" flex items-center mt-3 justify-center overflow-hidden h-[200px] w-full bg-[#D2CFE0]  border-gray border-[3px] rounded-xl pointer-events-auto  sm:w-[150px] sm:h-[150px]">
              <TransformWrapper>
                <TransformComponent>
                  <img
                    src={Map2d}
                    className="object-contain w-[200px] sm:w-[150px] sm:h-[150px] h-[200px] "
                    alt=""
                  />
                </TransformComponent>
              </TransformWrapper>
            </div>
          </div>
{/* 2d Map */}

          <Suspense
            fallback={
              <div className="flex items-center justify-center w-full h-full gap-3 ">
                <CircularProgress />

                <h1 className="text-sm ">Loading Map</h1>
              </div>
            }
          >
            <Canvas>
              <Environment
                files={process.env.PUBLIC_URL + "/textures/light.hdr"}
              />

              <PerspectiveCamera
                makeDefault
                fov={mapzoom}
                position={[100, -30, 30]}
                
                
              />

              <OrbitControls
                target={[0, 0, 10]}
                maxPolarAngle={Math.PI * 0.4}
              />

              <Float
                speed={0.9}
                position={[0, 0, 0]}
                rotationIntensity={0.6}
                floatIntensity={0.6}
              >
                <Cloud />
                <Map />
                <Location
                  loc={searches.location}
                  search={searches.buildingID}
                  roomSearch={searches.room}
                  floor={searches.floor}
                  block={searches.block}
                />
              </Float>
            </Canvas>
          </Suspense>
        </div>
      </div>
    </>
  );
}

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

export default Home;
