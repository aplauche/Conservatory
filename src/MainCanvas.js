import { Canvas } from "@react-three/fiber"
import MainScene from "./MainScene"
import Drawer from './components/Drawer.js'

export default function MainCanvas(){

  return (
    <>
          <Canvas shadows>
              
              
              <MainScene />
   
        </Canvas>
        
        <Drawer /> 
    </>
  )

}