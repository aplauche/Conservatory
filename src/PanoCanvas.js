import { Canvas } from "@react-three/fiber"
import Drawer from './components/Drawer.js'
import PanoOverlay from "./components/PanoOverlay.js"
import PanoScene from "./PanoScene"

export default function PanoCanvas(){

  return (
    <>
          <Canvas
            shadows
        >
              
              
          <PanoScene />

        
   
        </Canvas>
        
        <PanoOverlay /> 
    </>
  )

}