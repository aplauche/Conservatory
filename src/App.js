import { Canvas, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import Drawer from './components/Drawer.js'
import Experience from './Experience.js'
import PanoScene from './PanoScene.js'
import useRoom from './stores/useRoom.js'


export default function App(){

  const panoScene = useRoom(state => state.panoScene)

  return (
    <>
    
        <Canvas
            shadows
            camera={ {
                fov: 25,
                near: 0.1,
                far: 200,
                position: [  30, 22, 30 ]
            } }
        >
            
            {!panoScene ? (
              <Experience />
            ): (
              <PanoScene />
            )}
        
   
        </Canvas>
        
        <Drawer /> 
    </>
  )

}