import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
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
            // camera={ {
            //     fov: panoScene ? 75 : 25,
            //     near: 0.1,
            //     far: 200,
            //     position: panoScene ? [0,0,0] : [  30, 22, 30 ]
            // } }
        >



            {/* <Controls /> */}

          


            
            {!panoScene ? (
              <Experience />
            ) : (
              <PanoScene />
            )}
        
        {/* <PanoScene /> */}
   
        </Canvas>
        
        <Drawer /> 
    </>
  )

}