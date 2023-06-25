import { Loader } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { useParams } from "react-router-dom"
import CustomLoader from "./components/CustomLoader.js"
import PanoOverlay from "./components/PanoOverlay.js"
import PanoScene from "./PanoScene"
import roomsData from "./stores/roomsData.js"
import useRoom from "./stores/useRoom.js"

export default function PanoPage(){

  const {slug} = useParams()

  const loadPanoScene = useRoom((state) => state.loadPanoScene)

  loadPanoScene(roomsData.find(item => item.slug == slug))

  return (
    <>
        <Canvas>
              
          <Suspense fallback={null}>

            <PanoScene />

          </Suspense>

        
   
        </Canvas>
        <CustomLoader />
        <PanoOverlay /> 
    </>
  )

}