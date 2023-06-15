import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Float,
} from "@react-three/drei";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import { Suspense, useState } from "react";
import { Map } from "../main/Map";
import { Location } from "../main/Location";

import { useSelector } from "react-redux";
import { searchs } from "../../../cache/userSearch";
import { SearchOffline } from "../../../components/search/searchForOffline";

import { CircularProgress} from "@mui/material";
import { Link } from "react-router-dom";


import Map2d from "./../../../media/image/2dmapc.jpg";
import Cloud1 from "./../../../media/image/cloud_2-big.png";
import UmapLogo from "./../../../media/image/umap-logo.png";

import "./../main/main.css";
function Guest() {
  const searches = useSelector(searchs);
  const [mapzoom, setmapzoom] = useState(40);
  const [isclick, setclick] = useState(false);

  return (
    <>

      <div className="flex w-screen h-screen overflow-hidden main-screen">
        <div className="page">
          <div className=" animate__animated animate__fadeInDown h-[50%] w-[30%]">
             <img
            src={Cloud1}
            className="   animate-floatCloud  object-contain rotate-[-25deg] translate-x-[30px] translate-y-[-30px]"
            alt=""
          />
          </div>
       
        </div>

        <div className="w-full h-full bg-white">
        <div className="fixed top-0 z-50 flex justify-around object-contain w-full mt-4 cursor-pointer h-14 animate__animated animate__fadeInDown ">
          <img
            src={UmapLogo}
            className="z-50 h-10 object-contain cursor-pointer hover:scale-[0.9] transition-transform "
            alt="umap-logo"
            onClick={() => {
          
            }}
          />

          <ul className="flex items-center gap-4 ">
            
            <li>
              {" "}
              <Link to="/umap.ustp" className=" decoration-0 flex items-center gap-2 text-base hover:bg-green-500 active:bg-green-300 text-white px-6 rounded-lg py-3 bg-[red] hover:scale-[1.07] transition-transform">
              <span class="material-symbols-outlined">logout</span>
                <p>Exit</p> 
              </Link>{" "}
            </li>
          </ul>
        </div>

          <div className=" min-w-[30%] absolute right-0 mx-[10%] my-[20%] z-20 event animate__animated animate__bounceInRight">
            <SearchOffline/>
          </div>

          <div className="absolute bottom-0 right-0 w-[200px] z-30 h-[250px] mb-[5%] mr-[10%] pointer-events-none flex flex-col  items-end  ">
            <div className="flex text-white ">
              <div
                className="flex items-center justify-center h-[40px] text-lg rounded-s-md bg-gray w-[60px]
              hover:bg-opacity-70 border-r-[1px] border-[#ffffff68] cursor-pointer pointer-events-auto
              "
                onClick={() => {
                  setmapzoom(mapzoom - 1);
                }}
              >
                +
              </div>
              <div
                className="flex items-center justify-center h-[40px] text-lg rounded-e-md bg-gray w-[60px]
              hover:bg-opacity-70 border-r-[1px] border-[#ffffff68] cursor-pointer pointer-events-auto"
                onClick={() => {
                  setmapzoom(mapzoom + 1);
                }}
              >
                -
              </div>
            </div>

            <div className=" flex items-center mt-3 justify-center overflow-hidden h-[200px] w-full bg-[#D2CFE0]  border-gray border-[3px] rounded-xl pointer-events-auto">
              <TransformWrapper>
                <TransformComponent>
                  <img
                    src={Map2d}
                    className="object-contain w-[200px] h-[200px] "
                    alt=""
                  />
                </TransformComponent>
              </TransformWrapper>
            </div>
          </div>

              <Suspense fallback={<div className="flex items-center justify-center w-full h-full gap-3 ">
             < CircularProgress/> 

             <h1 className="text-sm ">Loading Map</h1>
          </div>}>

          
          <Canvas>
            <Environment
              files={process.env.PUBLIC_URL + "/textures/light.hdr"}
            />

            <PerspectiveCamera
              makeDefault
              fov={mapzoom}
              position={[400, 0, -5]}
            />

            <OrbitControls target={[0, 0, 10]} maxPolarAngle={Math.PI * 0.4} />

            <Float
              speed={0.9}
              position={[0, 0, 0]}
              rotationIntensity={0.6}
              floatIntensity={0.6}
            >
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

export default Guest;
