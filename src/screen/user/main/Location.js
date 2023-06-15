import { useLoader, useFrame } from "@react-three/fiber";
import { Text3D, Float } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef, useState } from "react";

export function Location(props) {
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "/models/location.gltf"
  );

  const [title, setTitle] = useState("");
  const [discription, setdiscription] = useState();

  const direction = useRef(null);

  useFrame((state) => {
    
    setTitle(props.roomSearch);

    switch (props.search) {
      case "3":
        direction.current.position.x = -28.3;
        direction.current.position.y = 6;
        direction.current.position.z = -40.2;
        direction.current.rotation.set(0, 1.44, 0);
        setTitle(props.roomSearch);
        setdiscription(
          `Integrated Technology Building | ${props.floor} : ${props.block}`
        );

        break;
      case "4":
        direction.current.position.x = -18.3;
        direction.current.position.y = 2;
        direction.current.position.z = -32.2;
        direction.current.rotation.set(0, 1.44, 0);
        setTitle(props.roomSearch);
        setdiscription(`ROTC Building | ${props.floor} : ${props.block}`);

        break;

      case "5":
        direction.current.position.x = -10.5;
        direction.current.position.y = 4;
        direction.current.position.z = -14.2;
        direction.current.rotation.set(0, 1.44, 0);
        setTitle(props.roomSearch);
        setdiscription(
          `Old Engineering Building | ${props.floor} : ${props.block}`
        );

        break;

      case "9":
        direction.current.position.x = -28.8;
        direction.current.position.y = 8;
        direction.current.position.z = -9.2;
        direction.current.rotation.set(0, 1.44, 0);
        setTitle(props.roomSearch);
        setdiscription(`CITC Building | ${props.floor} : ${props.block}`);

        break;
      case "14":
        direction.current.position.x = -25.3;
        direction.current.position.y = 7;
        direction.current.position.z = 16;
        direction.current.rotation.set(0,1.44, 0);
        setTitle(props.roomSearch);
        setdiscription(
          `Finance and Accounting Building | ${props.floor} : ${props.block}`
        );

        break;
      case "16":
        direction.current.position.x = -8;
        direction.current.position.y = 8;
        direction.current.position.z = 17;
        direction.current.rotation.set(0, 1.7, 0);
        setTitle(props.roomSearch);
        setdiscription(`DRER Memorial Hall | ${props.floor} : ${props.block}`);

        break;
      case "19":
        direction.current.position.x = 13;
        direction.current.position.y = 2;
        direction.current.position.z = -6;
        direction.current.rotation.set(0, 1.44, 0);
        setTitle(props.roomSearch);
        setdiscription(
          `Science Centrum Building | ${props.floor} : ${props.block}`
        );

        break;

      case "20":
        direction.current.position.x = 12.2;
        direction.current.position.y = 2;
        direction.current.position.z = 9;
        direction.current.rotation.set(0, 1.34, 0);

        setTitle(props.roomSearch);
        setdiscription(`Cafeteria| ${props.floor} : ${props.block}`);

        break;

      case "23":
        direction.current.position.x = -33;
        direction.current.position.y = 4;
        direction.current.position.z = 57;
        direction.current.rotation.set(0, 1.7, 0);
        setTitle(props.roomSearch);
        setdiscription(`LRC | ${props.floor} : ${props.block}`);

        break;
      case "24":
        direction.current.position.x = -16;
        direction.current.position.y = 0;
        direction.current.position.z = 64;
        direction.current.rotation.set(0, 1.84, 0);

        setTitle(props.roomSearch);
        setdiscription(`Food Trade Building | ${props.floor} : ${props.block}`);

        break;
      case "25":
        direction.current.position.x = -20;
        direction.current.position.y = 1;
        direction.current.position.z = 50;
        direction.current.rotation.set(0, 1.84, 0);
        setTitle(props.roomSearch);
        setdiscription(
          `Food Innovation Center | ${props.floor} : ${props.block}`
        );

        break;

      case "28":
        direction.current.position.x = -6;
        direction.current.position.y = 2;
        direction.current.position.z = 46;
        direction.current.rotation.set(0, 1.84, 0);
        setTitle(props.roomSearch);
        setdiscription(
          `Old Science Building | ${props.floor} : ${props.block}`
        );

        break;

      case "36":
        direction.current.position.x = -7;
        direction.current.position.y = 0;
        direction.current.position.z = 72;
        direction.current.rotation.set(0, 1.84, 0);
        setTitle(props.roomSearch);
        setdiscription(`Old Student Center| ${props.floor} : ${props.block}`);

        break;
      case "41":
        direction.current.position.x = 5;
        direction.current.position.y = 7;
        direction.current.position.z = 38;
        direction.current.rotation.set(0, 1.84, 0);
        setTitle(props.roomSearch);
        setdiscription(`Science Complex| ${props.floor} : ${props.block}`);

        break;

      default:
        
        direction.current.position.x = 23;
        direction.current.position.y = 0;
        direction.current.position.z = -16;
        direction.current.rotation.set(0, 1.44, 0);
        setTitle("USTP MAP");
        setdiscription("Developed By College Cheetah");

        break;
    }
  });

  return (
    <Float ref={direction} rotationIntensity={0} floatIntensity={0}>
      <Float
        position={[5.5, 5.5, -1.6]}
        rotation={[0, 0.22, 0]}
        rotationIntensity={0}
        floatIntensity={0}
      >
        <Float
          position={[0.1, 3.4, 0]}
          rotationIntensity={0}
          floatIntensity={0}
        >
          <Text3D
            font={process.env.PUBLIC_URL + "/fonts/Roboto_Regular.json"}
            size={1.4}
            height={0.065}
            curveSegments={12}
          >
            {props.loc}
            <meshStandardMaterial color="#000000" />
          </Text3D>
        </Float>

        <Text3D
          font={process.env.PUBLIC_URL + "/fonts/Roboto_Regular.json"}
          size={2.6}
          curveSegments={12}
        >
          {title}
          <meshStandardMaterial color="#fbbc05" />
        </Text3D>
        <Float
          position={[0.2, -2.2, 0]}
          rotationIntensity={0}
          floatIntensity={0}
        >
          <Text3D
            font={process.env.PUBLIC_URL + "/fonts/Roboto_Regular.json"}
            size={1.3}
            height={0.065}
            curveSegments={12}
          >
            {discription}
            <meshStandardMaterial color="#34434c" />
          </Text3D>
        </Float>
      </Float>

      <primitive object={gltf.scene} rotation={[0, 0.2, 0]} scale={[5, 5, 5]} />
    </Float>
  );
}
