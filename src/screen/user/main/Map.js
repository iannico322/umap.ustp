import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export function Map() {
  const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/FinalizedMap2.glb");

  return (
  
    <primitive object={gltf.scene}
   
    /> 
  )
}
