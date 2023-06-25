import { Canvas } from "@react-three/fiber"
import MainScene from "./MainScene"
import Drawer from './components/Drawer.js'
import { Suspense } from "react"
import { Loader, useProgress } from "@react-three/drei"
import MainOverlay from "./components/MainOverlay"
import useRoom from "./stores/useRoom"
import CustomLoader from "./components/CustomLoader"
import Instructions from "./components/Instructions"



export default function MainPage(){



  const currentlySelected = useRoom((state) => state.currentlySelected)

  const exitPanoScene = useRoom((state) => state.exitPanoScene)


  exitPanoScene()

  return (
    <>
      <div className={`main-scene-wrapper ${currentlySelected != null ? "drawer-open" : ""}`}>
        <CustomLoader />
        <div className={`canvas-wrapper `}>
          <Canvas shadows>
       
              <Suspense fallback={null}>
                <MainScene />
              </Suspense>
            
    
          </Canvas>

          <Instructions key="main" isVisible={!currentlySelected} position="bottom">
            Click and drag to rotate
          </Instructions>

          <Instructions key="detail" isVisible={currentlySelected != null} position="top">
            Click to return to main view
          </Instructions>



        </div>
        <Drawer /> 
        <MainOverlay />
      </div>
    </>
  )

}