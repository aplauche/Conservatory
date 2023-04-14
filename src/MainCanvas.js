import { Canvas } from "@react-three/fiber"
import MainScene from "./MainScene"
import Drawer from './components/Drawer.js'
import { Suspense } from "react"
import { Loader } from "@react-three/drei"
import MainOverlay from "./components/MainOverlay"
import useRoom from "./stores/useRoom"


export default function MainCanvas(){

  const currentlySelected = useRoom((state) => state.currentlySelected)


  return (
    <>
        <Canvas shadows>
              
            <Suspense fallback={null}>
              <MainScene />
            </Suspense>
           
   
        </Canvas>
        <Loader />
        <Drawer /> 
        {currentlySelected == null && (
          <MainOverlay />
        )}
    </>
  )

}