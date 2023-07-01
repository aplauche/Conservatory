import { Canvas } from "@react-three/fiber"
import MainScene from "./MainScene"
import Drawer from './components/Drawer.js'
import { Suspense, useEffect, useLayoutEffect } from "react"
import { Loader, useProgress } from "@react-three/drei"
import MainOverlay from "./components/MainOverlay"
import useRoom from "./stores/useRoom"
import CustomLoader from "./components/CustomLoader"
import Instructions from "./components/Instructions"



export default function MainPage(){



  const currentlySelected = useRoom((state) => state.currentlySelected)

  const exitPanoScene = useRoom((state) => state.exitPanoScene)

  useLayoutEffect(() => {
    exitPanoScene()
  }, [])


  return (
    <>
      <div className={`main-scene-wrapper ${currentlySelected != null ? "drawer-open" : ""}`}>
        <CustomLoader />
        <MainOverlay />
        <div className={`canvas-wrapper `}>
          <Canvas shadows>
       
              <Suspense fallback={null}>
                <MainScene />
              </Suspense>
            
    
          </Canvas>

          <Instructions keyVal="main" isVisible={!currentlySelected} position="bottom">
            Click and drag to rotate
          </Instructions>

          <Instructions keyVal="detail" isVisible={currentlySelected != null} position="top">
            Click to return to main view
          </Instructions>

        </div>
        <Drawer /> 

      </div>
    </>
  )

}