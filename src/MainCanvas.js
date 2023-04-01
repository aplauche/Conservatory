import { Canvas } from "@react-three/fiber"
import MainScene from "./MainScene"
import Drawer from './components/Drawer.js'
import { Suspense } from "react"
import { Loader } from "@react-three/drei"


export default function MainCanvas(){

  return (
    <>
        <Canvas shadows>
              
            <Suspense fallback={null}>
              <MainScene />
            </Suspense>
           
   
        </Canvas>
        <Loader />
        <Drawer /> 
    </>
  )

}