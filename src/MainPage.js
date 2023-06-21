import { Canvas } from "@react-three/fiber"
import MainScene from "./MainScene"
import Drawer from './components/Drawer.js'
import { Suspense } from "react"
import { Loader } from "@react-three/drei"
import MainOverlay from "./components/MainOverlay"
import useRoom from "./stores/useRoom"


export default function MainPage(){

  const currentlySelected = useRoom((state) => state.currentlySelected)

  const exitPanoScene = useRoom((state) => state.exitPanoScene)

  exitPanoScene()

  return (
    <>
      <div className={`main-scene-wrapper ${currentlySelected != null ? "drawer-open" : ""}`}>
        <Loader />
        <div className={`canvas-wrapper `}>
          <Canvas shadows>
                
              <Suspense fallback={null}>
                <MainScene />
              </Suspense>
            
    
          </Canvas>
        </div>
        <Drawer /> 
        <MainOverlay />
      </div>
    </>
  )

}