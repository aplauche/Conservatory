import { Loader } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import PanoOverlay from "./components/PanoOverlay.js"
import PanoScene from "./PanoScene"

export default function PanoCanvas(){

  return (
    <>
        <Canvas
            shadows
        >
              
          <Suspense fallback={null}>

            <PanoScene />

          </Suspense>

        
   
        </Canvas>
        <Loader />
        <PanoOverlay /> 
    </>
  )

}