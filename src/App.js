import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import Drawer from './components/Drawer.js'
import MainScene from './MainScene.js'
import PanoScene from './PanoScene.js'
import useRoom from './stores/useRoom.js'


export default function App(){

  const panoScene = useRoom(state => state.panoScene)

  return (
    <>
    
        <Canvas
            shadows
        >
            {!panoScene ? (
              <MainScene />
            ) : (
              <PanoScene />
            )}
        
   
        </Canvas>
        
        <Drawer /> 
    </>
  )

}