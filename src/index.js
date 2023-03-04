import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        shadows
        camera={ {
            fov: 25,
            near: 0.1,
            far: 200,
            position: [  30, 20, 30 ]
        } }
    >
        <Experience />
    </Canvas>
)