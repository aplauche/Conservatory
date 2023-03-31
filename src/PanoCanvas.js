import { Canvas } from "@react-three/fiber"
import Drawer from './components/Drawer.js'
import PanoScene from "./PanoScene"

export default function PanoCanvas(){

  return (
    <>
          <Canvas
            shadows
        >
              
              
              <PanoScene />

        
   
        </Canvas>
        
        <Drawer /> 
    </>
  )

}