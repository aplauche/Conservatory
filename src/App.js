import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'

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

    </>
  )

}