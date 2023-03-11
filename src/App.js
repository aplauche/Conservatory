import { Canvas, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import Drawer from './components/Drawer.js'
import Experience from './Experience.js'
import useRoom from './stores/useRoom.js'


export default function App(){


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
            <Experience />
        </Canvas>
        
        <Drawer /> 
    </>
  )

}